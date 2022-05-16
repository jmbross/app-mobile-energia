import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import DROnEvent from '@/organisms/DROnEvent';
import DRParticipationControl from '@/organisms/DRParticipationControl';
import { EventStatusEnum } from '@/types/dr';
import { Body, Container, Date, Footer, Header, Logo, Time, Title, Upcoming, Wrapper } from './index.styles';
import { IDRUpcomingEventViewProps } from './index.types';
import DRNoEvent from '@/organisms/DRNoEvent';

const DRUpcomingEventView = ({
  currentSiteId,
  userEventId,
  userStatus,
  eventStatus,
  accept,
  startDate,
  endDate,
}: IDRUpcomingEventViewProps) => {
  const { t } = useTranslation('common');

  const renderUpcomingEvent = () => {
    return (
      <Wrapper>
        <Container>
          <Header>
            <Logo>
              <Img src={accept ? images.greenEnergyEnabled : images.greenEnergyDisabled} />
            </Logo>
            <Title>{t('screens.main.savingsEvents.savingsEventsScreen.upcomingEvent.title')}</Title>
          </Header>
          <Body>
            <Upcoming>
              <Date>{moment(startDate).format('dddd, MMMM DD')}</Date>
              <Time>{`${moment(startDate).format('h:mm a')} - ${moment(endDate).format('h:mm a')}`}</Time>
            </Upcoming>
          </Body>
          <Footer>
            <DRParticipationControl currentSiteId={currentSiteId} userStatus={userStatus} userEventId={userEventId} />
          </Footer>
        </Container>
      </Wrapper>
    );
  };

  const renderOnEvent = () => {
    return <DROnEvent index={0} userStatus={userStatus} />;
  };

  const renderNoEvent = () => {
    return <DRNoEvent />;
  };

  return (
    <>
      {eventStatus === EventStatusEnum.NoEvent && renderNoEvent()}
      {eventStatus === EventStatusEnum.UpcomingEvent && renderUpcomingEvent()}
      {eventStatus === EventStatusEnum.OnEvent && renderOnEvent()}
    </>
  );
};

export default DRUpcomingEventView;
