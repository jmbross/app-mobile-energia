export interface IModalOtpRequestProps {
  show: boolean;
}

export interface IModalOtpRequestViewProps extends IModalOtpRequestProps {
  disabledSendCode: boolean;
  phoneNumber: string;
  onChangePhoneNumber: (value: string) => void;
  onClose: () => void;
  onOk: () => void;
}
