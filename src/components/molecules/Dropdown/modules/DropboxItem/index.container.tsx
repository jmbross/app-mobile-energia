import React, { useState } from 'react';
import { Text, MenuItem } from './index.styles';
import { IDropboxItemProps } from './index.types';

const IndexContainer = ({ items, values, onChange }: IDropboxItemProps) => {
  const [selected, setSelected] = useState(values);

  const handleClick = (value: string | number, text: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((name) => name !== value));
    } else {
      setSelected([...selected, value]);
    }

    if (onChange) {
      onChange(value, text);
    }
  };

  const isSelect = (_value: string | number) => {
    return selected.find((val) => val === _value);
  };

  return (
    <>
      {items.map(({ id, name, text }) => (
        <MenuItem
          key={id}
          selected={!!isSelect(name)}
          onClick={() => {
            handleClick(name, text);
          }}
        >
          <Text>{text}</Text>
        </MenuItem>
      ))}
    </>
  );
};

export default IndexContainer;
