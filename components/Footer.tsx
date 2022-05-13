import styles from '../styles/components/Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.footer__list}>
      <li className={styles.footer__list__item}><a href="https://github.com/diegofelipece/nxt-diego-esteves">{'<source/>'}</a></li>
      <li className={styles.footer__list__item}><a href="https://github.com/diegofelipece">GitHub</a></li>
      <li className={styles.footer__list__item}><a href="https://www.linkedin.com/in/diegofelipece/">LinkedIn</a></li>
    </ul>
  </footer>
)

export default Footer;