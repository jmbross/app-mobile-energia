import { ReactNode } from 'react';

export interface IEnrollmentTemplateProps extends IStyleNavigationPath, IStyleContainerProps {
  /**
   * 자식 컴포넌트
   */
  children: ReactNode;

  /**
   * Next 버튼 비활성화 여부
   */
  disabled: boolean;

  /**
   * 네비게이션 아이콘
   */
  navigationIcon?: string;

  /**
   * 네이게이션 타이틀
   */
  navigationTitle?: string;

  /**
   * 네이게이션 현재 경로
   */
  navigationPath?: string;

  /**
   * Next 버튼 클릭 이벤트
   */
  onNext?: () => void;

  /**
   * Next 버튼 라벨
   */
  textNext?: string;

  /**
   * Other 버튼 클릭 이벤트
   */
  onOther?: () => void;

  /**
   * Other 버튼 라벨
   */
  textOther?: string;

  wrapperMaxWidth?: string;

  wrapperMargin?: string;

  buttonsContainerPadding?: string;
}

export interface IStyleNavigationPath {
  /**
   * 언더라인 사용
   */
  underline?: boolean;
}

export interface IStyleContainerProps {
  appLogin?: boolean;
  showBoxShadow?: boolean;
}

export interface IStyleWrapperProps {
  maxWidth?: string;
  margin?: string;
}

export interface IStyleButtonsContainerProps {
  padding?: string;
}

export interface IEnrollmentTemplateViewProps extends IEnrollmentTemplateProps {
  /**
   * Back 버튼 클릭 이벤트
   */
  onBack: () => void;
}
