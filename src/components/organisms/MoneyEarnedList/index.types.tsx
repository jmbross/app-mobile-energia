import { MoneyEarnedItem } from '@/types/dr';

export interface IMoneyEarnedListViewProps {
  items: MoneyEarnedItem[];
  onClick: (item: MoneyEarnedItem) => void;
}
