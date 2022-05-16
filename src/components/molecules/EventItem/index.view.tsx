import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Button from '@/atoms/Button';
import { UnitHelper } from '@/helpers/UnitHelper';
import { UserStatusEnum } from '@/types/dr';
import { IEventItemViewProps } from './index.types';
import { Wrapper, Header, Body, Name, Percent, Date, Usage } from './index.styles';

const EventItemView = ({ item, onClick }: IEventItemViewProps) => {
  const { t } = useTranslation('common');

  const checkPending = item.hadJoined && !item.hasUsageData;

  const checkNoReply = !item.hadJoined && item.userStatus === UserStatusEnum.DefaultEvent;

  const checkDeclined = !item.hadJoined;

  const checkReduced = () => {
    if (checkPending || checkNoReply || checkDeclined) {
      return undefined;
    }

    return item.quickViewData.hadReduced;
  };

  const renderUsage = () => {
    if (checkPending) {
      return t('screens.main.savingsEvents.savingsEventsHistoryScreen.events.pending.title');
    }

    if (checkNoReply) {
      return t('screens.main.savingsEvents.savingsEventsHistoryScreen.events.noReply.title');
    }

    if (checkDeclined) {
      return t('screens.main.savingsEvents.savingsEventsHistoryScreen.events.declined.title');
    }

    return UnitHelper.renderUnitValue(item.quickViewData.changeInUsage, 'wh');
  };

  const renderPercent = () => {
    if (checkPending || checkNoReply || checkDeclined || item.percentageChangeInUsage === null) {
      return '-';
    }

    const hadReduced = item.quickViewData.hadReduced ? '↓' : '↑';
    return UnitHelper.renderUnitValue(item.percentageChangeInUsage, 'percent', false, 1) + hadReduced;
  };

  return (
    <Button
      disabled={checkDeclined}
      backgroundColor="#fff"
      width="100%"
      marginBottom={10}
      onClick={() => onClick(item)}
    >
      <Wrapper>
        <Header>
          <Name>{item.name}</Name>
          <Usage reduced={checkReduced()}>{renderUsage()}</Usage>
        </Header>
        <Body>
          <Date>{moment(item.date).format('MMMM Do YYYY')}</Date>
          <Percent reduced={checkReduced()}>{renderPercent()}</Percent>
        </Body>
      </Wrapper>
    </Button>
  );
};

export default EventItemView;
