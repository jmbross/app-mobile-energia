export interface ILocationSetupViewProps {
  isBusiness: boolean;
  zipCode: string;
  siteName: string;
  onChangeBusiness: () => void;
  onChangeZipcode: (value: string) => void;
  onChangeSiteName: (value: string) => void;
}
