import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { useDr } from '@/hooks/index';
import { PerformanceToDateEnum } from '@/types/dr';
import SavingsEventsHistoryView from './index.view';

const SavingsEventsHistoryContainer = () => {
  const {
    dr: {
      history: { selectedTab },
    },
  } = useSelector((state: RootState) => state);
  const { fetchTabSelect } = useDr();

  const handleTab = (link: string) => {
    fetchTabSelect(link as PerformanceToDateEnum);
  };

  return <SavingsEventsHistoryView tabLinkSelected={selectedTab} onTabClick={handleTab} />;
};

export default SavingsEventsHistoryContainer;
