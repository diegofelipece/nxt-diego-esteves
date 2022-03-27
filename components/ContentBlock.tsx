import Image from 'next/image';
import styles from '../styles/components/ContentBlock.module.scss';
import { Block } from "../types/Block";

interface ContentBlockProps {
  block: Block;
}

const ContentBlock = ({ block }: ContentBlockProps) => (
  <div className={styles.content_block}>
    {block.paragraphs ? <div className={styles.content_block__text} dangerouslySetInnerHTML={{__html: block.paragraphs}}></div>: null}
    {block.image ? <div className={styles.content_block__image}><Image src={block.image.src} alt={block.image.alt} layout='fill'></Image></div> : null}
  </div>
);

export default ContentBlock;