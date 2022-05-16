import React from 'react';
import { Wrapper, Input, Left, Right } from './index.styles';
import { IInputProps } from './index.types';

const IndexContainer = ({
  type,
  kind,
  inputNotUsed,
  border,
  placeholder,
  defaultValue,
  value,
  align,
  fontSize,
  color,
  left,
  right,
  minLength,
  maxLength,
  onFocus,
  onBlur,
  onChangeText,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
}: IInputProps) => {
  return (
    <Wrapper
      border={border}
      kind={kind}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      {left && <Left>{left}</Left>}
      {!inputNotUsed && (
        <Input
          type={type}
          fontSize={fontSize}
          align={align}
          color={color}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          onBlur={onFocus}
          onFocus={onBlur}
          onChange={(event) => {
            if (onChangeText) {
              onChangeText(event.target.value.trim());
            }
          }}
        />
      )}
      {right && <Right>{right}</Right>}
    </Wrapper>
  );
};

export default IndexContainer;
