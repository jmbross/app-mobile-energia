import { MoneyEarnedItem } from '@/types/dr';

export interface IMoneyEarnedItemViewProps {
  item: MoneyEarnedItem;
  onClick: (item: MoneyEarnedItem) => void;
}

export type IMoneyEarnedItemProps = IMoneyEarnedItemViewProps;
