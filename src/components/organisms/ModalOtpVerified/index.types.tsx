export interface IModalOtpVerifiedProps {
  show: boolean;
}

export interface IModalOtpVerifiedViewProps extends IModalOtpVerifiedProps {
  onClose: () => void;
  onOk: () => void;
}
