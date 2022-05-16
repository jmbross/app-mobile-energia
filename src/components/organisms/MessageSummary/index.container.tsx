import React from 'react';
import MessageSummaryView from './index.view';
import { IMessageSummaryProps } from './index.types';

const MessageSummaryContainer = ({ message, selected, onClick }: IMessageSummaryProps) => {
  return <MessageSummaryView message={message} selected={selected} onClick={onClick} />;
};

export default MessageSummaryContainer;
