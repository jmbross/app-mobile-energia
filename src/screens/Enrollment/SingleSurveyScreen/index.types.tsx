import { Program } from '@/types/enrollment';

export interface ISingleSurveyScreenViewProps {
  enrollmentProgram: Program;
  disabledNext: boolean;
  onNext: () => void;
  onSkip: () => void;
}
