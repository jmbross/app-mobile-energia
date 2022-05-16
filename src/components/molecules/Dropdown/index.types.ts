export interface IStyleContainerProps {
  borderRadius?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}

export interface IStyleInputProps {
  opend: boolean;
}

export interface IDropdownProps extends IStyleContainerProps {
  isMultiple?: boolean;
  check?: boolean;
  items: { name: string | number; text: string }[];
  placeholder?: string;
  values: (string | number)[];
  onChange: (name: (string | number)[], text?: string) => void;
}
