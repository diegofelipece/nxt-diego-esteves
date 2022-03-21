import styles from '../styles/components/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footer__list}>
      <li className={styles.footer__list__item}><a href="#">{'<source/>'}</a></li>
      <li className={styles.footer__list__item}><a href="#">GitHub</a></li>
      <li className={styles.footer__list__item}><a href="#">LinkedIn</a></li>
    </ul>
  </footer>
)

export default Footer;