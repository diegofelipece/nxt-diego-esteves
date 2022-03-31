import styles from '../styles/components/Button.module.scss';

type Props = {
  label: string,
  onClick?: () => void,
}

const Button = ({ label, onClick }: Props) => {
  return (
    <button className={`${styles.button} ${styles['--tertiary']}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;