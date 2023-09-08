import styles from '../styles/components/GenericBlock.module.scss';

type Props = {
  children: React.ReactNode;
}

const GenericBlock = ({ children }: Props) => {
  return (
    <div className={styles.block}>
      {children}
    </div>
  )
};

export default GenericBlock;
