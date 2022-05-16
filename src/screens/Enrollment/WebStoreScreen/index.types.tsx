import { Program } from '@/types/enrollment';

export interface IWebStoreScreenViewProps {
  enrollmentProgram: Program;
  onNoThanks: () => void;
}
