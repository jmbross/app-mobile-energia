export interface IStyleWrapperProps {
  selected: boolean;
}

export interface ITabButtonProps extends IStyleWrapperProps {
  fontSize?: number;
  label: string;
  onClick?: () => void;
}
