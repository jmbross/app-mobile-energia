import { EnergyHistory } from '@/types/dashboard';

export interface RecentEnergyHistoryViewProps {
  item: EnergyHistory;

  onHelp: () => void;

  modalEnergyHistory: boolean;
  modalEnergyHistoryClose: () => void;
}
