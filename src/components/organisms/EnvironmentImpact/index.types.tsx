import { EnvironmentalImpact } from '@/types/dashboard';

export interface IEnvironmentImpactViewProps {
  item: EnvironmentalImpact;

  onHelp: () => void;

  modalEnvironmentalImpact: boolean;
  modalEnvironmentalImpactClose: () => void;
}

export interface IStyleItemProps {
  underline?: boolean;
}
