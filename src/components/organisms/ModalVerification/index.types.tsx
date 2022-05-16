export interface IModalVerificationProps {
  /**
   * 출력 여부
   */
  show: boolean;

  /**
   * 닫기 버튼 클릭 이벤트
   */
  onClose: () => void;

  /**
   * 확인 버튼 클릭 이벤트
   */
  onOk: () => void;

  /**
   * 취소 버튼 클릭 이벤트
   */
  onCancel: () => void;
}

export interface IModalVerificationViewProps extends IModalVerificationProps {
  /**
   * 프로그램명
   */
  programName: string;
}
