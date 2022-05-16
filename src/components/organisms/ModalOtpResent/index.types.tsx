export interface IModalOtpResentProps {
  show: boolean;
}

export interface IModalOtpResentViewProps extends IModalOtpResentProps {
  onClose: () => void;
  onOk: () => void;
}
