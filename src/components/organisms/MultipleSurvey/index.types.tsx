import { SurveyAnswer } from '@/types/enrollment';

export interface IMultipleSurveyViewProps {
  program: string;
  surveyAnswer: SurveyAnswer[];
  onChangeSurvey: (question: string, answer: string) => void;
}
