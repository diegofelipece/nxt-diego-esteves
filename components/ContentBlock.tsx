import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/components/ContentBlock.module.scss';
import { Block } from "../types/Block";

interface ContentBlockProps {
  block: Block;
}

const ContentBlock = ({ block }: ContentBlockProps) => {
  const [ratio, setRatio] = useState(16/9) // default to 16:9

  return (
    <div className={styles.content_block}>
      {block.paragraphs ? <div className={styles.content_block__text} dangerouslySetInnerHTML={{__html: block.paragraphs}}></div>: null}
      {block.image ? (
        <div className={styles.content_block__image}>
          <Image
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width}
            height={block.image.heigth}
          />
        </div>
      ) : null}
    </div>
  )
};

export default ContentBlock;
