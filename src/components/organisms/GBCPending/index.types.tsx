export interface IGBCPendingViewProps {
  email: string;
  programName: string;
  onEmail: (subject: string, body: string) => void;
  onSms: () => void;
}
