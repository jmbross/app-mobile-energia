import React from 'react';

export interface IModalProps {
  /**
   * 출력 여부
   */
  show: boolean;

  /**
   * 제목
   */
  title?: string;

  /**
   * 자식 컴포넌트
   */
  children: React.ReactNode;

  /**
   * 닫기 버튼 출력 여부
   */
  showClose?: boolean;

  /**
   * 닫기 버튼 클릭 이벤트
   */
  onClose?: () => void;

  /**
   * 확인 버튼 클릭 이벤트
   */
  onOk?: () => void;

  /**
   * 확인 버튼 텍스트
   */
  textOk?: string;

  /**
   * 취소 버튼 클릭 이벤트
   */
  onCancel?: () => void;

  /**
   * 취소 버튼 텍스트
   */
  textCancel?: string;

  disabledOk?: boolean;
}
