import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { PerformanceToDateEnum } from '@/types/dr';
import DRDetailViewView from './index.view';

const DRDetailViewContainer = () => {
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
    <DRDetailViewView
      items={
        selectedTab === PerformanceToDateEnum.events
          ? selectedEvent?.detailData.graphData
          : selectedEarningsEvent?.detailData.graphData
      }
    />
  );
};

export default DRDetailViewContainer;
