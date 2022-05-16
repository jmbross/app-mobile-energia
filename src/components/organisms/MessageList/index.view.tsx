import React from 'react';
import MessageSummary from '@/organisms/MessageSummary';
import { IMessageListViewProps } from './index.types';

const MessageListView = ({ messages, selectedMessageId, onClick }: IMessageListViewProps) => {
  return (
    <>
      {messages.map((message) => (
        <MessageSummary
          key={message.id}
          message={message}
          selected={message.id === selectedMessageId}
          onClick={onClick}
        />
      ))}
    </>
  );
};

export default MessageListView;
