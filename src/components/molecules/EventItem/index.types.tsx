import { DrHistoryItem } from '@/types/dr';

export interface IEventItemViewProps {
  item: DrHistoryItem;
  onClick: (item: DrHistoryItem) => void;
}

export type IEventItemProps = IEventItemViewProps;

export interface IStyleValue {
  reduced?: boolean;
}
