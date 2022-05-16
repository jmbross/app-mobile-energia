import React from 'react';
import { useTranslation } from 'react-i18next';
import Img from '@/atoms/Img';
import { images } from '@/assets/styles';
import MessageList from '@/organisms/MessageList';
import MessageDetail from '@/organisms/MessageDetail';
import { Wrapper, Container, List, Detail, EmptyContainer, Logo, Empty } from './index.styles';
import { IMessagesViewProps } from './index.types';

const MessagesView = ({ empty }: IMessagesViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      {empty ? (
        <EmptyContainer>
          <Logo>
            <Img src={images.emptyMessages} />
          </Logo>
          <Empty>{t('screens.main.messages.messagesScreen.empty')}</Empty>
        </EmptyContainer>
      ) : (
        <Container>
          <List>
            <MessageList />
          </List>
          <Detail>
            <MessageDetail />
          </Detail>
        </Container>
      )}
    </Wrapper>
  );
};

export default MessagesView;
