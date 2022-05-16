import { ReactNode } from 'react';

export interface ISectionProps extends IStyleWrapper, IStyleHeaderContainer, IStyleDescription {
  title?: string;
  subTitle?: string;
  description?: string;
  more?: ReactNode;
  children: ReactNode;
}

export interface IStyleWrapper {
  transparent?: boolean;
  shadow?: boolean;
  marginTop?: string;
  marginBottom?: string;
}

export interface IStyleHeaderContainer {
  modal?: boolean;
  titleAlign?: 'flex-start' | 'flex-end' | 'center';
}

export interface IStyleDescription {
  descriptionAlign?: 'left' | 'center' | 'right';
}
