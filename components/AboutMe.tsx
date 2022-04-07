import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/components/AboutMe.module.scss';
import Button from './Button';
import { motion, useAnimation } from "framer-motion"

const AboutMe = () => {
  const controls = useAnimation();

  controls.start({
    width: "0%",
    transition: { duration: 0 },
  })  

  const router = useRouter();
  const clickOnAbout = () => {
    controls.start({
      width: "100%",
      transition: { duration: 0.6 },
    }).then(() => {
      router.push('/about');
    })  
  };

  return (
    <div className={styles.about_me}>
      <motion.span
        animate={controls}
        className={styles.about_me__layover}></motion.span>
      <div className={styles.about_me__inner}>
        <div className={styles.about_me__inner__image}>
          <Image
            src="/images/diego.jpg"
            alt="Diego Esteves"
            width={238}
            height={238}
          />
        </div>
        <div className={styles.about_me__inner__description}>
          <p className={styles.about_me__inner__description__text}>
            I`ve been working as designer since 2010 and developing websites even before I knew the meaning of front end development. Curious?
          </p>
          <Button label={'check my path >'} onClick={clickOnAbout}></Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;