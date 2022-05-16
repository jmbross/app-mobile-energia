export interface ICheckboxProps {
  items: { id: string | number; name: string | number; text: string }[];
  values: (string | number)[];

  onChange?: (name: string | number, text: string) => void;
}
