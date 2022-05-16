import React from 'react';
import { IStackProps } from './index.types';
import { Wrapper } from './index.styles';

const StackContainer = ({ children, ...props }: IStackProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default StackContainer;
