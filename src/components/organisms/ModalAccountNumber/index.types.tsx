export interface IModalAccountNumberProps {
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
}

export type IModalAccountNumberViewProps = IModalAccountNumberProps;
