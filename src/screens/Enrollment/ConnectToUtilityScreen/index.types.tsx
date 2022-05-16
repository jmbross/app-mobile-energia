import { Program } from '@/types/enrollment';

export interface IConnectToUtilityScreenViewProps {
  enrollmentProgram: Program;
  disabledNext: boolean;
  onNext: () => void;
  onNoThanks: () => void;

  later: boolean;
  modalConnectToUtilityError: boolean;
  modalConnectToUtilityErrorTitle: string;
  modalConnectToUtilityErrorOK: () => void;
}
