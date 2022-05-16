import { Program } from '@/types/enrollment';

export interface INotVerifiedScreenViewProps {
  enrollmentProgram: Program;
  onTryAgain: () => void;
  onNoThanks: () => void;
}
