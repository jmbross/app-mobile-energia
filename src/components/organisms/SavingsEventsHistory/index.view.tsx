import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '@/molecules/Section';
import Tabs from '@/molecules/Tabs';
import EventList from '@/organisms/EventList';
import MoneyEarnedList from '@/organisms/MoneyEarnedList';
import { PerformanceToDateEnum } from '@/types/dr';
import { Header, Body } from './index.styles';
import { ISavingsEventsHistoryViewProps } from './index.types';

const SavingsEventsHistoryView = ({ tabLinkSelected, onTabClick }: ISavingsEventsHistoryViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Section>
      <Header>
        <Tabs
          tabs={[
            {
              id: 0,
              title: t('screens.main.savingsEvents.savingsEventsHistoryScreen.events.title'),
              tabName: 'events',
            },
            {
              id: 1,
              title: t('screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.title'),
              tabName: 'moneyEarned',
            },
          ]}
          selected={tabLinkSelected}
          onClick={onTabClick}
        />
      </Header>
      <Body>{tabLinkSelected === PerformanceToDateEnum.events ? <EventList /> : <MoneyEarnedList />}</Body>
    </Section>
  );
};

export default SavingsEventsHistoryView;
