export interface IModalOptOutProps {
  show: boolean;
  onClose: () => void;
  onOk: () => void;
  onCancel: () => void;
}

export interface IModalOptOutViewProps extends IModalOptOutProps {
  answer: string;
  other: string;
  onChangeRadio: (value: string) => void;
  onChangeText: (text: string) => void;
}
