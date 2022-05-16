import { Message } from '@/types/message';

export interface IMessageSummaryViewProps extends IStyleSelected {
  message: Message;
  onClick: (messageId: string) => void;
}

export interface IStyleSelected {
  selected?: boolean;
}

export interface IStyleTitle extends IStyleSelected {
  newMessage?: boolean;
}

export type IMessageSummaryProps = IMessageSummaryViewProps;
