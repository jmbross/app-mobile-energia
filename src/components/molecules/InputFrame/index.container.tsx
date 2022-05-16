import React from 'react';
import { IInputFrameProps } from './index.types';
import { Wrapper, Title } from './index.styles';

const IndexContainer = ({ children, label, marginTop, marginBottom }: IInputFrameProps) => {
  return (
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      {label && <Title>{label}</Title>}
      {children}
    </Wrapper>
  );
};

export default IndexContainer;
