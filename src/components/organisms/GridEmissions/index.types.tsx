import { MainState } from '@/stores/main';
import { GridEmissions } from '@/types/dashboard';

export interface IGridEmissionsViewProps {
  item: GridEmissions;

  onHelp: () => void;
  mainState: MainState;
  modalGridEmissions: boolean;
  modalGridEmissionsClose: () => void;
}

export interface IStyleItemProps {
  underline?: boolean;
}
