import { ReactNode } from 'react';

export interface IStackProps extends IStyleWrapperProps {
  children: ReactNode;
}

export interface IStyleWrapperProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  spacing?: number;
}
