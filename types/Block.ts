export enum TextPosition {
  full = 'full',
  right = 'right',
  left = 'left',
}

export interface ImageProps {
  src: string;
  alt: string;
  width: string|number;
  heigth: string|number;
}

export interface Block {
  paragraphs?: string;
  textPosition?: TextPosition;
  image?: ImageProps;
}
