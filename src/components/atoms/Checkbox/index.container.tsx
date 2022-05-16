import React, { useState } from 'react';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import { Wrapper, Checkbox, Text } from './index.styles';
import { ICheckboxProps } from './index.types';

const CheckboxContainer = ({ items, values, onChange }: ICheckboxProps) => {
  const [selected, setSelected] = useState(values);

  const onClick = (value: string | number, text: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }

    if (onChange) {
      onChange(value, text);
    }
  };

  const isSelect = (value: string | number) => {
    return selected.find((name) => name === value);
  };

  return (
    <Wrapper>
      {items.map(({ id, name, text }) => (
        <Checkbox
          key={id}
          onClick={() => {
            onClick(name, text);
          }}
        >
          <Img src={isSelect(name) ? images.checkboxChecked : images.checkbox} />
          {text && text !== '' && <Text selected={!!isSelect(name)}>{text}</Text>}
        </Checkbox>
      ))}
    </Wrapper>
  );
};

export default CheckboxContainer;
