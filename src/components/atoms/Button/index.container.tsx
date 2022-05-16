import React from 'react';
import Img from '@/atoms/Img';
import { Button, Container, Text, Left, Right } from './index.styles';
import { IButtonProps } from './index.types';

const IndexContainer = ({
  children,
  label,
  labelWeight,
  left,
  leftIcon,
  right,
  rightIcon,
  color,
  align = 'center',
  width,
  height,
  maxWidth,
  disabled,
  transparent,
  backgroundColor,
  borderRadius,
  borderColor,
  borderWidth,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  onClick,
  fontSize,
}: IButtonProps) => {
  return (
    <Button
      width={width}
      height={height}
      maxWidth={maxWidth}
      disabled={disabled}
      transparent={transparent}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      borderColor={borderColor}
      borderWidth={borderWidth}
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
      <Container>
        {children || (
          <>
            {(left || leftIcon) && (
              <Left>
                {left && left}
                {leftIcon && <Img src={leftIcon} />}
              </Left>
            )}
            {label && (
              <Text fontSize={fontSize} align={align} color={color} labelWeight={labelWeight}>
                {label}
              </Text>
            )}
            {(right || rightIcon) && (
              <Right>
                {right && right}
                {rightIcon && <Img src={rightIcon} />}
              </Right>
            )}
          </>
        )}
      </Container>
    </Button>
  );
};

export default IndexContainer;
