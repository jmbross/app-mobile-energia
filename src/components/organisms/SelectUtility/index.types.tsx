export interface ISelectUtilityViewProps {
  utilities: string[];
  selectedUtility: string;
  onChangeUtility: (utility: string) => void;
}
