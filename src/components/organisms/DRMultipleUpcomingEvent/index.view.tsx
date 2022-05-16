import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { images } from '@/assets/styles';
import IconButton from '@/atoms/IconButton';
import Img from '@/atoms/Img';
import DRParticipationControl from '@/organisms/DRParticipationControl/index.container';
import { Wrapper, Container, Logo, Title, Upcoming, Date, Time, Header, Body, Footer, More } from './index.styles';
import { IDRMultipleUpcomingEventViewProps } from './index.types';
import { EventStatusEnum, UserStatusEnum } from '@/types/dr';
import DROnEvent from '@/organisms/DROnEvent';
import DRNoEvent from '@/organisms/DRNoEvent';

const DRMultipleUpcomingEventView = ({
  index,
  currentSiteId,
  userEventId,
  userStatus,
  eventStatus,
  accept,
  startDate,
  endDate,
  expand,
  showExpand,
  onExpand,
}: IDRMultipleUpcomingEventViewProps) => {
  const { t } = useTranslation('common');

  const renderUpcomingEvent = () => {
    return (
      <Wrapper index={index}>
        <Container>
          <Header>
            <Logo>
              <Img src={accept ? images.greenEnergyEnabled : images.greenEnergyDisabled} />
            </Logo>
            <Title>
              {accept
                ? t('screens.main.savingsEvents.savingsEventsScreen.onTimer.title.accept')
                : t('screens.main.savingsEvents.savingsEventsScreen.onTimer.title.decline')}
            </Title>
            {showExpand && (
              <More>
                <IconButton icon={expand ? images.arrowUpGreen : images.arrowDownGreen} onClick={onExpand} />
              </More>
            )}
          </Header>
          {expand && (
            <>
              <Body>
                <Upcoming>
                  <Date>{moment(startDate).format('dddd, MMMM DD')}</Date>
                  <Time>{`${moment(startDate).format('h:mm a')} - ${moment(endDate).format('h:mm a')}`}</Time>
                </Upcoming>
              </Body>
              <Footer>
                <DRParticipationControl
                  currentSiteId={currentSiteId}
                  userStatus={userStatus}
                  userEventId={userEventId}
                />
              </Footer>
            </>
          )}
        </Container>
      </Wrapper>
    );
  };

  const renderOnEvent = () => {
    return <DROnEvent index={index} userStatus={userStatus} />;
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

export default DRMultipleUpcomingEventView;
