export interface IModalOtpVerificationProps {
  show: boolean;
}

export interface IModalOtpVerificationViewProps extends IModalOtpVerificationProps {
  disabledVerify: boolean;
  otpCode: string;
  onChangeOtpCode: (value: string) => void;
  onClose: () => void;
  onVerification: () => void;
  onResend: () => void;
}
