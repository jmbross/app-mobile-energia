export interface IProgramInformationViewProps {
  programName: string;
  modalProgramInformation: boolean;
  modalProgramInformationClose: () => void;
  onHelp: () => void;
}

export type IProgramInformationProps = IProgramInformationViewProps;
