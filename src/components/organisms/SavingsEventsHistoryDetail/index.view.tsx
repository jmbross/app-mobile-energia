import React from 'react';
import EventDetail from '@/organisms/EventDetail';
import EarningDetail from '@/organisms/EarningDetail';
import { PerformanceToDateEnum } from '@/types/dr';
import { ISavingsEventsHistoryDetailViewProps } from './index.types';

const SavingsEventsHistoryDetailView = ({ selectedTab, selectedEarnings }: ISavingsEventsHistoryDetailViewProps) => {
  const renderEvent = () => {
    return <EventDetail />;
  };

  const renderMoneyEarned = () => {
    if (selectedEarnings?.eventId) {
      return <EventDetail />;
    }

    return <EarningDetail />;
  };

  return (
    <>
      {selectedTab === PerformanceToDateEnum.events && renderEvent()}
      {selectedTab === PerformanceToDateEnum.moneyEarned && renderMoneyEarned()}
    </>
  );
};

export default SavingsEventsHistoryDetailView;
