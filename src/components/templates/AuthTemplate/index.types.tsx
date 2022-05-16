import { ReactNode } from 'react';
import { Language } from '@/types/setting';

export interface IAuthTemplateProps {
  /**
   * 자식 컴포넌트
   */
  children: ReactNode;
}

export interface IAuthTemplateViewProps extends IAuthTemplateProps {
  appLogin: boolean;

  /**
   * 현재 언어
   */
  language: Language;

  /**
   * 언어 변경 이벤트
   *
   * @param language 언어
   */
  onChangeLanguage: (language: Language) => void;
}
