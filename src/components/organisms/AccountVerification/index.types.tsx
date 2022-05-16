export interface IAccountVerificationProps {
  firstName: string;
  lastName: string;
  serviceAccountNumber: string;
  serviceAddress: string;
  serviceCity: string;
  serviceZip: string;
  servicePhone: string;
  serviceEmail: string;
  onFirstName: (value: string) => void;
  onLastName: (value: string) => void;
  onServiceAccountNumber: (value: string) => void;
  onServiceAddress: (value: string) => void;
  onServiceCity: (value: string) => void;
  onServiceZip: (value: string) => void;
  onServicePhone: (value: string) => void;
  onServiceEmail: (value: string) => void;
  utility: string;
}

export enum Utilities {
  PGE = 'PGE',
  SCE = 'SCE',
}
