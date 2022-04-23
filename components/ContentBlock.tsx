import Image from 'next/image';
import styles from '../styles/components/ContentBlock.module.scss';
import { Block } from "../types/Block";

type Props = {
  block: Block;
}

const ContentBlock = ({ block }: Props) => {
  return (
    <div className={styles.content_block}>
      {block.paragraphs ? <div className={styles.content_block__text} dangerouslySetInnerHTML={{__html: block.paragraphs}}></div>: null}
      {block.image ? (
        <div className={styles.content_block__image}>
          <Image
            src={block.image.src}
            alt={block.image.alt || ''}
            width={block.image.width || '100%'}
            height={block.image.heigth || 'auto'}
          />
        </div>
      ) : null}
    </div>
  )
};

export default ContentBlock;
