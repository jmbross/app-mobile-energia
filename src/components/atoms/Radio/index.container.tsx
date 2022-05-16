import React from 'react';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import { Wrapper, Radio, Text } from './index.styles';
import { IRadioProps } from './index.types';

const RadioContainer = ({ items, value, onChange }: IRadioProps) => {
  return (
    <Wrapper>
      {items.map(({ id, name, text }) => (
        <Radio
          key={id}
          onClick={() => {
            if (onChange) {
              onChange(name, text);
            }
          }}
        >
          <Img src={name === value ? images.radioChecked : images.radio} />
          <Text selected={name === value}>{text}</Text>
        </Radio>
      ))}
    </Wrapper>
  );
};

export default RadioContainer;
