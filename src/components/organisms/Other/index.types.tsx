import { Language } from '@/types/setting';

export interface IOtherViewProps {
  language: Language;
  onLanguage: (language: Language) => void;
}
