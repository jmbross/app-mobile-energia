import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import {
  Wrapper,
  Container,
  Header,
  Body,
  Logo,
  Title,
  Upcoming,
  Date,
  Time,
  RemainingTime,
  Timer,
  TimerDescription,
} from './index.styles';
import { IDROnEventViewProps } from './index.types';
import { UserStatusEnum } from '@/types/dr';

const DROnEventView = ({
  accept,
  userStatus,
  startDate,
  endDate,
  timerHours,
  timerMinutes,
  timerSeconds,
}: IDROnEventViewProps) => {
  const { t } = useTranslation('common');

  const digit = (val: number) => {
    return val.toString().padStart(2, '0');
  };

  const renderTimer = () => {
    return `${digit(timerHours)} : ${digit(timerMinutes)} : ${digit(timerSeconds)}`;
  };

  return (
    <Wrapper>
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
        </Header>
        <Body>
          <Upcoming>
            <Date>{moment(startDate).format('dddd, MMMM DD')}</Date>
            <Time>{`${moment(startDate).format('h:mm a')} - ${moment(endDate).format('h:mm a')}`}</Time>
          </Upcoming>
          {userStatus === UserStatusEnum.EventConfirmed && (
            <RemainingTime>
              <Timer>{renderTimer()}</Timer>
              <TimerDescription>
                {t('screens.main.savingsEvents.savingsEventsScreen.onTimer.remainingTime')}
              </TimerDescription>
            </RemainingTime>
          )}
        </Body>
      </Container>
    </Wrapper>
  );
};

export default DROnEventView;
