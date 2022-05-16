import React from 'react';
import { useTranslation } from 'react-i18next';
import EventItem from '@/molecules/EventItem';
import { Wrapper, NoData } from './index.styles';
import { IEventListViewProps } from './index.types';

const EventListView = ({ items, onClick }: IEventListViewProps) => {
  const { t } = useTranslation('common');

  if (items.length === 0) {
    return (
      <Wrapper>
        <NoData>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.events.noData')}</NoData>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {items.map((item) => (
        <EventItem key={item.eventId} item={item} onClick={onClick} />
      ))}
    </Wrapper>
  );
};

export default EventListView;
