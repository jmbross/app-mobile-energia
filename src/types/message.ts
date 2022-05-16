export interface Message {
  id: string;
  isNewMessage: boolean;
  textFormat: string;
  name: string;
  content: string;
  time: Date;
}
