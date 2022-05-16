import React from 'react';
import { Wrapper, Dot, Title } from './index.styles';
import { ILegendTextProps } from './index.types';

const LegendContainer = ({ dotColor, title, marginLeft }: ILegendTextProps) => {
  return (
    <Wrapper marginLeft={marginLeft}>
      <Dot dotColor={dotColor} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default LegendContainer;
