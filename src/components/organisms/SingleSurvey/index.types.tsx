import { SurveyAnswer } from '@/types/enrollment';

export interface ISingleSurveyViewProps {
  programName: string;
  surveyAnswer: SurveyAnswer;
  other?: string;
  referralName?: string;
  referralEmail?: string;
  referralPhoneNumber?: string;

  onChangeSurvey: (question: string, answer: string) => void;
  onChangeReferralName: (value: string) => void;
  onChangeReferralEmail: (value: string) => void;
  onChangeReferralPhoneNumber: (value: string) => void;
  onChangeOther: (value: string) => void;
}
