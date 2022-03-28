export enum TextPosition {
  full = 'full',
  right = 'right',
  left = 'left',
}

export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  heigth: number;
}

export interface Block {
  paragraphs?: string;
  textPosition?: TextPosition;
  image?: ImageProps;
}
