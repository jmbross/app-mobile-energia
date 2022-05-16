export interface IModalOtpErrorProps {
  show: boolean;
}

export interface IModalOtpErrorViewProps extends IModalOtpErrorProps {
  onClose: () => void;
  onOk: () => void;
  onCancel: () => void;
}
