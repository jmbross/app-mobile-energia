import React from 'react';
import Input from '@/atoms/Input';
import InputFrame from '@/molecules/InputFrame';
import { IInputTextProps } from './index.types';

const InputTextContainer = ({
  type,
  border,
  inputNotUsed,
  readonly,
  label,
  placeholder,
  value,
  defaultValue,
  onChangeText,
  minLength,
  maxLength,
  marginTop,
  marginBottom,
  right,
}: IInputTextProps) => {
  return (
    <InputFrame label={label} marginTop={marginTop} marginBottom={marginBottom}>
      <Input
        type={type}
        border={border || 'border'}
        inputNotUsed={inputNotUsed}
        readonly={readonly}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChangeText={onChangeText}
        paddingTop={6}
        paddingBottom={6}
        minLength={minLength}
        maxLength={maxLength}
        right={right}
      />
    </InputFrame>
  );
};

export default InputTextContainer;
