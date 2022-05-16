import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { Message } from '@/types/message';
import MessageDetailView from './index.view';

const MessageDetailContainer = () => {
  const {
    messages: { messages, selectedMessageId },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ message?: Message }>({ message: undefined });

  useEffect(() => {
    setState({ message: messages.find(({ id }) => id === selectedMessageId) });
  }, [selectedMessageId]);

  return <MessageDetailView selectedMessage={state.message} />;
};

export default MessageDetailContainer;
