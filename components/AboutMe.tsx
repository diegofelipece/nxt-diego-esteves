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

  const age =  Math.floor((new Date().getTime() - new Date(1990, 6, 26).getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <div className={styles.about_me}>
      <motion.span
        animate={controls}
        className={styles.about_me__layover}></motion.span>
      <div className={styles.about_me__inner}>
        <div className={styles.about_me__inner__image}>
          <Image
            loader={({src}) => `/images/${src}`}
            src="diego.jpg"
            alt="Diego Esteves"
            width={238}
            height={238}
          />
        </div>
        <div className={styles.about_me__inner__description}>
          <h2>TL;DR</h2>
          <p className={styles.about_me__inner__description__text}>
            Diego Esteves. {age} years old. Born in Brazil, living in Italy. Developer and designer since 2010. 
          </p>
          <Button label={'more details >'} onClick={clickOnAbout}></Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;