import { Message } from '@/types/message';

export interface IMessageListViewProps {
  messages: Message[];
  selectedMessageId?: string;
  onClick: (messageId: string) => void;
}
