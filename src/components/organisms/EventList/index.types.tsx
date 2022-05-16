import { DrHistoryItem } from '@/types/dr';

export interface IEventListViewProps {
  items: DrHistoryItem[];
  onClick: (item: DrHistoryItem) => void;
}
