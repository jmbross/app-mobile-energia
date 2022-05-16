import React from 'react';
import Img from '@/atoms/Img';
import { Button } from './index.styles';
import { IButtonProps } from './index.types';

const IndexContainer = ({
  width,
  height,
  disabled,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  onClick,
  icon,
}: IButtonProps) => {
  return (
    <Button
      transparent
      width={width}
      height={height}
      disabled={disabled}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      onClick={onClick}
    >
      <Img src={icon} />
    </Button>
  );
};

export default IndexContainer;
