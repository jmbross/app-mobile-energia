import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { messagesRequest, messageSelect } from '@/stores/message';

export default function useMessage() {
  const dispatch = useDispatch();

  const fetchMessages = useCallback(() => dispatch(messagesRequest()), [dispatch]);

  const fetchMessageSelect = useCallback((messageId: string) => dispatch(messageSelect(messageId)), [dispatch]);

  return {
    fetchMessageSelect,
    fetchMessages,
  };
}
