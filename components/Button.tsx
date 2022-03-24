import styles from '../styles/components/Button.module.scss';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => (
  <button className={`${styles.button} ${styles['--tertiary']}`}>{label}</button>
)

export default Button;