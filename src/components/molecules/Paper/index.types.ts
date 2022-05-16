import React from 'react';

export interface IPaperProps extends IStyleWrapperProps {
  children: React.ReactNode;
}

export interface IStyleWrapperProps {
  shadow?: boolean;
  transparent?: boolean;
  marginTop?: number;
  align?: 'left' | 'center' | 'right';
}
