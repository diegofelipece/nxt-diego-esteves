import styles from '../styles/components/Logo.module.scss';
import { motion } from "framer-motion"

type Props = {
  size: 'large'|'small',
}

const Logo = ({ size = 'large' }: Props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.4 }}
      className={`${styles.logo} --${size}`}>
      <h1 className={styles.logo__title}>Diego<br />Esteves</h1>
      <p className={styles.logo__subtitle}>designer and developer</p>
    </motion.div>
  );
};

export default Logo;