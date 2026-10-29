const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const sitePath = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
};

export default sitePath;
