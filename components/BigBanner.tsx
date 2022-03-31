import styles from '../styles/components/BigBanner.module.scss';
import { motion } from "framer-motion"
import Logo from './Logo';

const BigBanner = () => {
  const images = [
    '/images/big-banner/mala.jpg',
    '/images/big-banner/panteao.jpg',
    '/images/big-banner/sao-paulo.jpg',
  ];
  const imageUrl = images[Math.floor(Math.random()*images.length)];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{duration: 1}}>
      <div className={styles.big_banner} style={{backgroundImage: `url(${imageUrl})`}}>  
        <Logo size='large'></Logo>
      </div>
    </motion.div>
  );
};

export default BigBanner;