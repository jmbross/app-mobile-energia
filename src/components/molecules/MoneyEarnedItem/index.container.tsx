import React from 'react';
import MoneyEarnedItemView from './index.view';
import { IMoneyEarnedItemProps } from './index.types';

const MoneyEarnedItemContainer = ({ item, onClick }: IMoneyEarnedItemProps) => {
  return <MoneyEarnedItemView item={item} onClick={onClick} />;
};

export default MoneyEarnedItemContainer;
