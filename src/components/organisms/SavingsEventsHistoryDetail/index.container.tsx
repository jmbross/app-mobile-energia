import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import SavingsEventsHistoryDetailView from './index.view';

const SavingsEventsHistoryDetailContainer = () => {
  const {
    dr: {
      history: {
        selectedTab,
        earnings: { selectedEarnings },
      },
    },
  } = useSelector((state: RootState) => state);

  return <SavingsEventsHistoryDetailView selectedTab={selectedTab} selectedEarnings={selectedEarnings} />;
};

export default SavingsEventsHistoryDetailContainer;
