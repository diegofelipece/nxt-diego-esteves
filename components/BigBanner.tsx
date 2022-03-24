import styles from '../styles/components/BigBanner.module.scss';

const BigBanner = () => {
  const images = [
    '/images/big-banner/mala.jpg',
    '/images/big-banner/panteao.jpg',
    '/images/big-banner/sao-paulo.jpg',
  ];
  const imageUrl = images[Math.floor(Math.random()*images.length)];
  return (
    <div className={styles.big_banner} style={{backgroundImage: `url(${imageUrl})`}}>
      <div className={styles.big_banner__box}>
        <h1 className={styles.big_banner__box__title}>Diego<br />Esteves</h1>
        <p className={styles.big_banner__box__subtitle}>designer and developer</p>
      </div>
    </div>
  );
};

export default BigBanner;