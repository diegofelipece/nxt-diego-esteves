import styles from '../styles/components/Button.module.scss';

type Props = {
  label: string;
}

const Button = ({ label }: Props) => (
  <button className={`${styles.button} ${styles['--tertiary']}`}>{label}</button>
)

export default Button;