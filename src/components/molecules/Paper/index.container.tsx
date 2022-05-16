import React from 'react';
import { IPaperProps } from './index.types';
import { Wrapper } from './index.styles';

const PaperContainer = ({ children, shadow, transparent, marginTop, align }: IPaperProps) => {
  return (
    <Wrapper shadow={shadow} transparent={transparent} marginTop={marginTop} align={align}>
      {children}
    </Wrapper>
  );
};

export default PaperContainer;
