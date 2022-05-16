import React from 'react';
import { theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import { Wrapper } from './index.styles';
import { ITabButtonProps } from './index.types';

const TabButton = ({ selected, label, fontSize, onClick }: ITabButtonProps) => {
  return (
    <Wrapper selected={selected}>
      <Button
        label={label}
        fontSize={fontSize || theme.typography.button.fontSize}
        color={selected ? theme.colors.primary[75] : '#8ca0b3'}
        labelWeight={selected ? 800 : 400}
        transparent
        height="100%"
        onClick={onClick}
      />
    </Wrapper>
  );
};

export default TabButton;
