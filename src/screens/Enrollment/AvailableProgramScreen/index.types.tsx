import { Program } from '@/types/enrollment';

export interface IAvailableProgramScreenViewProps {
  enrollmentProgram: Program;
  disabledNext: boolean;
  onNext: () => void;
  onNoThanks: () => void;
  isNoThanks: boolean; // App Only에서는 No Thanks의 버튼이 없어야 한다.
}
