import { Program } from '@/types/enrollment';

export interface IVerificationScreenViewProps {
  enrollmentProgram: Program;
  disabledNext: boolean;
  onNext: () => void;
  onNoThanks: () => void;

  modalVerification: boolean;
  modalVerificationClose: () => void;
  modalVerificationOk: () => void;
  modalVerificationCancel: () => void;
}
