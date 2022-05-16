export interface IVerificationViewProps {
  /**
   * Business 여부
   */
  isBusiness: boolean;

  /**
   * 프로그램명
   */
  programName: string;

  /**
   * 사용자 이름
   */
  accountName: string;

  /**
   * 계정 번호
   */
  accountNumber: string;

  /**
   * 계정 번호 최소 자리수
   */
  accountMinLength: number;

  /**
   * 계정 번호 최대 자리수
   */
  accountMaxLength: number;

  /**
   * Account Number에 대한 설명 팝업
   */
  onClickAccountNumber: () => void;

  /**
   * 사용자 이름 변경 이벤트
   */
  onChangeName: (value: string) => void;

  /**
   * 계정 번호 변경 이벤트
   */
  onChangeAccountNumber: (value: string) => void;

  /**
   * Account Number 팝업 출력
   */
  modalAccountNumber: boolean;

  /**
   * Account Number 팝업 닫기
   */
  modalAccountNumberClose: () => void;

  /**
   * Account Number 팝업 확인
   */
  modalAccountNumberOk: () => void;
}
