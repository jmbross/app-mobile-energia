export interface IModalDREventRequestProps {
  show: boolean;
  onClose: () => void;
  onOk: () => void;
  onCancel: () => void;
}

export interface IModalDREventRequestViewProps extends IModalDREventRequestProps {
  answer: string;
  other: string;
  onChangeRadio: (value: string) => void;
  onChangeText: (text: string) => void;
}
