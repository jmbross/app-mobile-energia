export interface IProfileSetupViewProps {
  firstName: string;
  lastName: string;
  onFirstName: (value: string) => void;
  onLastName: (value: string) => void;
}
