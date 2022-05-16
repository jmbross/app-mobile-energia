import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { PerformanceToDateEnum } from '@/types/dr';
import DRQuickViewView from './index.view';

const DRQuickViewContainer = () => {
  const {
    dr: {
      history: {
        selectedTab,
        event: { selectedEvent },
        earnings: { selectedEarningsEvent },
      },
    },
  } = useSelector((state: RootState) => state);

  return (
    <DRQuickViewView item={selectedTab === PerformanceToDateEnum.events ? selectedEvent : selectedEarningsEvent} />
  );
};

export default DRQuickViewContainer;
