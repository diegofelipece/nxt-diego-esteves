import styles from '../styles/components/BigBanner.module.scss';

const BigBanner = () => {
  return (
    <div className={styles.big_banner}>
      <div className={styles.big_banner__box}>
        <h1 className={styles.big_banner__box__title}>Diego<br />Esteves</h1>
        <p className={styles.big_banner__box__subtitle}>designer and developer</p>
      </div>
    </div>
  );
};

export default BigBanner;