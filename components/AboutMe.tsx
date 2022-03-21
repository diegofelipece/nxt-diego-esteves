import Image from 'next/image';
import styles from '../styles/components/AboutMe.module.scss';
import Button from './Button';

const AboutMe = () => {
  return (
    <div className={styles.about_me}>
      <div className={styles.about_me__image}>
        <Image
          src="/diego.jpg"
          alt="Picture of the author"
          width={238}
          height={238}
        />
      </div>
      <div className={styles.about_me__description}>
        <p className={styles.about_me__description__text}>
          I`ve been working as designer since 2010 and developing websites even before I knew the meaning of front end development. Curious?
        </p>
        <Button label={'check my path >'}></Button>
      </div>
    </div>
  );
}

export default AboutMe;