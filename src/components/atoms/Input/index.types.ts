import React from 'react';

interface IStyleDefaultProps {
  borderRadius?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}

export interface IStyleWrapperProps extends IStyleDefaultProps {
  border?: 'border' | 'underline' | 'none';
  kind?: 'default' | 'success' | 'danger' | 'warning' | 'info';
}

export interface IStyleInputProps {
  align?: 'left' | 'center' | 'right';
  color?: string;
  fontSize?: number;
}

export interface IInputProps extends IStyleWrapperProps, IStyleInputProps {
  readonly?: boolean;
  inputNotUsed?: boolean;

  type: 'text' | 'password' | 'number' | 'url' | 'email' | 'search';
  placeholder?: string;
  defaultValue?: string | '';
  value?: string | '';
  minLength?: number;
  maxLength?: number;

  left?: React.ReactNode;
  right?: React.ReactNode;

  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText: (text: string) => void;
}
