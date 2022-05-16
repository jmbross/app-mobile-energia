import React from 'react';

export interface IStyleWrapperProps {
  marginTop?: number;
  marginBottom?: number;
}

export interface IInputFrameProps extends IStyleWrapperProps {
  children: React.ReactNode;

  label?: string;
}
