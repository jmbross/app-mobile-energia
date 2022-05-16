import { DefaultImage } from '@/types/images';

interface IStyleDefaultProps {
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}

export interface IStyleButtonProps extends IStyleDefaultProps {
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
}

export interface IButtonProps extends IStyleButtonProps {
  icon: DefaultImage;

  onClick?: () => void;
}
