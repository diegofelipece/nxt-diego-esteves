require('dotenv').config()
const { resolve } = require('path');

const {
  FTP_HOST,
  FTP_PORT,
  FTP_USER,
  FTP_PASSWORD,
} = process.env

const TIMESTAMP = (new Date().toISOString()).replaceAll(/:|\./g, '-');

const LOCAL_BUILD_PATH = resolve('./out');

const ROOT_PATH = '/var/www/diegoesteves.ink';
const PUBLIC_PATH = `${ROOT_PATH}/public`;
const BKPS_PATH = `${ROOT_PATH}/bkps`;
const CURRENT_BKP_PATH = `${BKPS_PATH}/${TIMESTAMP}`;

const shell = require('shelljs');

console.log('Start building project');
shell.exec('npm run build');

const Client = require('ssh2-sftp-client');
const sftp = new Client();

const assureDirExists = async (dirPath) => {
  if (!await sftp.exists(dirPath)) {
    console.log('DIR created', dirPath);
    return await sftp.mkdir(dirPath);
  };
  console.log('DIR exists', dirPath);
}

const cpRecursively = async (srcDirPath, targetDirPath) => {
  await assureDirExists(targetDirPath);

  const fileList = await sftp.list(srcDirPath);
  // console.log(fileList);
  for (const file of fileList) {
    const { type, name } = file;
    if (type === 'd') {
      await cpRecursively(`${srcDirPath}/${name}`, `${targetDirPath}/${name}`);
      continue;
    }
    await sftp.rcopy(`${srcDirPath}/${name}`, `${targetDirPath}/${name}`);
    console.log(`Copy file ${srcDirPath}/${name}`);
  }
}

const rmRecursively = async (srcPath) => {
  const fileList = await sftp.list(srcPath);
  // console.log(fileList);
  for (const file of fileList) {
    const { type, name } = file;
    if (type === 'd') {
      await sftp.rmdir(`${srcPath}/${name}`, true);
      console.log(`RMDIR ${srcPath}/${name}`);
      continue;
    }
    await sftp.delete(`${srcPath}/${name}`);
    console.log(`RM ${srcPath}/${name}`);
  }
}

(async () => {
  try {
    console.log('Try to connect via SFTP');
    await sftp.connect({
      host: FTP_HOST,
      port: FTP_PORT,
      user: FTP_USER,
      password: FTP_PASSWORD,
    });
  
    console.log('Connected!');
    if (!await sftp.exists(PUBLIC_PATH)) throw Error('Public dir not found!', PUBLIC_PATH);
  
    const currentFiles = await sftp.list(PUBLIC_PATH);
    if (currentFiles && currentFiles.length > 0) {
      await assureDirExists(BKPS_PATH);
  
      await assureDirExists(CURRENT_BKP_PATH);

      console.log('Move current version to backup', CURRENT_BKP_PATH);
      await cpRecursively(PUBLIC_PATH, CURRENT_BKP_PATH);
      await rmRecursively(PUBLIC_PATH);
    }
    
    console.log('Upload new version', LOCAL_BUILD_PATH);
    shell.exec('cp ./lib/htaccess ./out/.htaccess');
    await sftp.uploadDir(LOCAL_BUILD_PATH, PUBLIC_PATH, { useFastput: true });
    console.log('Done!');  
  } catch (error) {
    console.log(error, 'catch error');  
  }
  
  sftp.end();
})()
