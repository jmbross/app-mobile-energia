import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useMessage from '@/hooks/useMessage';
import { RootState } from '@/stores/index';
import MessagesView from './index.view';

const MessageContainer = () => {
  const {
    messages: { messages },
  } = useSelector((state: RootState) => state);

  const { fetchMessages } = useMessage();

  useEffect(() => {
    fetchMessages();
  }, []);

  return <MessagesView empty={messages.length === 0} />;
};

export default MessageContainer;
