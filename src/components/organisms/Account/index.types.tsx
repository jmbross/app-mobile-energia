export interface IAccountViewProps {
  disabledSave: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  onFirstName: (value: string) => void;
  onLastName: (value: string) => void;
  onPassword: () => void;
  onSmsPhoneEdit: () => void;
  onSmsPhoneRemove: () => void;
  onSave: () => void;
  onLogout: () => void;

  modalOtpRequest: boolean;
  modalOtpVerification: boolean;
  modalOtpVerified: boolean;
  modalOtpError: boolean;
  modalOtpResent: boolean;
}
