import React from 'react';
import { ISelectUtilityViewProps } from './index.types';
import Radio from '@/atoms/Radio';

const SelectUtilityView = ({ utilities, selectedUtility, onChangeUtility }: ISelectUtilityViewProps) => {
  return (
    <div>
      <Radio
        items={Object.values(utilities).map((utility) => {
          return { id: utility, name: utility, text: utility };
        })}
        value={selectedUtility}
        onChange={(name) => onChangeUtility(name as string)}
      />
    </div>
  );
};

export default SelectUtilityView;
