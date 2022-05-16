import { ReactNode } from 'react';
import { DefaultImage } from '@/types/images';

interface IStyleDefaultProps {
  borderRadius?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}

export interface IStyleButtonProps extends IStyleDefaultProps {
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  maxWidth?: number;
  minWidth?: number;
  disabled?: boolean;
  transparent?: boolean;
  borderColor?: string;
  borderWidth?: number;
}

export interface IStyleTextProps {
  align?: 'left' | 'center' | 'right';
  color?: string;
  fontSize?: number;
  labelWeight?: number;
}

export interface IButtonProps extends IStyleButtonProps, IStyleTextProps {
  children?: React.ReactNode;
  label?: string;
  left?: ReactNode;
  leftIcon?: DefaultImage;
  right?: ReactNode;
  rightIcon?: DefaultImage;
  onClick?: () => void;
  labelWeight?: number;
}
