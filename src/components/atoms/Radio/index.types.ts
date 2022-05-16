export interface IStyleTextProps {
  selected: boolean;
}

export interface IRadioProps {
  items: { id: string | number; name: string | number; text: string }[];
  value: string | number;

  onChange?: (name: string | number, text?: string) => void;
}
