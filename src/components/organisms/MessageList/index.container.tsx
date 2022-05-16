import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useMessage from '@/hooks/useMessage';
import MessageListView from './index.view';

const MessageListContainer = () => {
  const {
    messages: { messages, selectedMessageId },
  } = useSelector((state: RootState) => state);

  const { fetchMessageSelect } = useMessage();

  const handleClick = (messageId: string) => {
    if (selectedMessageId === messageId) {
      return;
    }

    fetchMessageSelect(messageId);
  };

  return <MessageListView messages={messages} selectedMessageId={selectedMessageId} onClick={handleClick} />;
};

export default MessageListContainer;
