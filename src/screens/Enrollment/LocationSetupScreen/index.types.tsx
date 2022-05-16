export interface ILocationSetupScreenViewProps {
  disabledNext: boolean;
  onNext: () => void;

  modalZipcode: boolean;
  modalZipcodeClose: () => void;
  modalZipcodeOk: () => void;
  modalZipcodeCancel: () => void;

  modalNoPrograms: boolean;
  modalNoProgramsOk: () => void;
}
