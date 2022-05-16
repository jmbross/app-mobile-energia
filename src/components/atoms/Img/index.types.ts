import { CSSProperties } from 'react';
import { DefaultImage } from '@/types/images';

export interface IImgProps {
  src: DefaultImage | string;
  style?: CSSProperties | undefined;
}
