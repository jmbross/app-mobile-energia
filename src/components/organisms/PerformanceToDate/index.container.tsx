import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import PerformanceToDateView from './index.view';

const PerformanceToDateContainer = () => {
  const {
    dr: {
      history: { event, earnings, selectedTab },
    },
  } = useSelector((state: RootState) => state);
  const [stateModal, setStateModal] = useState({ reward: false });

  return (
    <PerformanceToDateView
      eventData={event.summary}
      earningData={earnings.summary}
      type={selectedTab}
      onHelp={() => setStateModal({ ...stateModal, reward: true })}
      modalReward={stateModal.reward}
      modalRewardClose={() => setStateModal({ ...stateModal, reward: false })}
    />
  );
};

export default PerformanceToDateContainer;
