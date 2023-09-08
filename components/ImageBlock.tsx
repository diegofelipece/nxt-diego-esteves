import Image from 'next/image';
import styles from '../styles/components/ImageBlock.module.scss';

type Props = {
  src: string;
  alt?: string;
  width?: number;
  heigth?: number;
}

const ImageBlock = ({ src, alt, width, heigth }: Props) => {
  return (
    <div className={styles.image_block}>
      <Image
        loader={({src}) => `/images/${src}`}
        src={src}
        alt={alt || ''}
        width={width || '100%'}
        height={heigth || 'auto'}
      />
    </div>
  )
};

export default ImageBlock;
