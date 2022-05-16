export interface ISelectUtilityScreenViewProps {
  disabledNext: boolean;
  onNext: () => void;
  utility: string;

  modalNoPrograms: boolean;
  modalNoProgramsOk: () => void;
}
