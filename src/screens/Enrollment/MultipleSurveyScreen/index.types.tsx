import { Program } from '@/types/enrollment';

export interface IMultipleSurveyScreenViewProps {
  enrollmentProgram: Program;
  disabledNext: boolean;
  onNext: () => void;
  onNoThanks: () => void;
}
