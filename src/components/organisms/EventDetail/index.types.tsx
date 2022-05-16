import { DrHistoryItem } from '@/types/dr';

export interface ISavingsEventsHistoryDetailViewProps {
  item: DrHistoryItem;
  tabLinkSelected: string;
  onTabClick: (tabName: string) => void;

  onHelp: () => void;

  modalEnergyEvent: boolean;
  modalEnergyEventClose: () => void;
}
