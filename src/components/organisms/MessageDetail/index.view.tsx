import React from 'react';
import { useTranslation } from 'react-i18next';
import TimeAgo from 'react-timeago';
import Img from '@/atoms/Img';
import { images } from '@/assets/styles';
import { Message } from '@/types/message';
import {
  Wrapper,
  Header,
  Body,
  Footer,
  Title,
  Date,
  Description,
  Regards,
  CreatedBy,
  Empty,
  EmptyContainer,
  Logo,
} from './index.styles';
import { IMessageDetailViewProps } from './index.types';

const MessageDetailView = ({ selectedMessage }: IMessageDetailViewProps) => {
  const { t } = useTranslation('common');

  const renderMessage = (message: Message) => {
    const { name, content, time, textFormat } = message;

    return (
      <Wrapper>
        <Header>
          <Title>{name}</Title>
          <Date>
            <TimeAgo date={time} />
          </Date>
        </Header>
        <Body>
          {textFormat === 'html' ? (
            <Description
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          ) : (
            <Description>{content}</Description>
          )}
        </Body>
        <Footer>
          <Regards>{t('screens.main.messages.messagesDetailScreen.regards')}</Regards>
          <CreatedBy>createdBy</CreatedBy>
        </Footer>
      </Wrapper>
    );
  };

  const renderEmpty = () => {
    return (
      <EmptyContainer>
        <Logo>
          <Img src={images.emptyMessages} />
        </Logo>
        <Empty>{t('screens.main.messages.messagesDetailScreen.empty')}</Empty>
      </EmptyContainer>
    );
  };

  return selectedMessage ? renderMessage(selectedMessage) : renderEmpty();
};

export default MessageDetailView;
