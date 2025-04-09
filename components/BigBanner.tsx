'use client'

import { motion } from "framer-motion";
import { useMemo } from "react";
import styles from '../styles/components/BigBanner.module.scss';
import sortBigBannerImage from '../utils/sortBigBannerImage';
import Logo from './Logo';

type Props = {
}

const BigBanner = ({}: Props) => {
  const bgUrl = useMemo(() => sortBigBannerImage(), []);

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
      <div className={styles.big_banner} style={{backgroundImage: `url(${bgUrl})`}}>  
        <Logo size='large'></Logo>
      </div>
    </motion.div>
  );
};

export default BigBanner;