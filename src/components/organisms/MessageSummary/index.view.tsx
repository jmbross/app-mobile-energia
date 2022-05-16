import React from 'react';
import { useTranslation } from 'react-i18next';
import TimeAgo from 'react-timeago';
import Button from '@/atoms/Button';
import { Wrapper, Header, Body, Title, New, Date } from './index.styles';
import { IMessageSummaryViewProps } from './index.types';

const MessageSummaryView = ({ message, selected, onClick }: IMessageSummaryViewProps) => {
  const { t } = useTranslation('common');

  const { name, time, isNewMessage } = message;

  return (
    <Button width="100%" transparent marginBottom={20} onClick={() => onClick(message.id)}>
      <Wrapper selected={selected}>
        <Header>
          <Title selected={selected}>{name}</Title>
          {isNewMessage && !selected && <New>{t('screens.main.messages.messagesScreen.new')}</New>}
        </Header>
        <Body>
          <Date selected={selected}>
            <TimeAgo date={time} />
          </Date>
        </Body>
      </Wrapper>
    </Button>
  );
};

export default MessageSummaryView;
