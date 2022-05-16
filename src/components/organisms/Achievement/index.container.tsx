import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import AchievementView from './index.view';

const AchievementContainer = () => {
  const {
    dashboard: { achievement },
  } = useSelector((state: RootState) => state);

  const [stateModal, setStateModal] = useState({ reward: false });

  const handleHelp = () => {
    setStateModal({ ...stateModal, reward: true });
  };

  const handleReward = () => {
    setStateModal({ ...stateModal, reward: false });
  };

  return (
    <AchievementView
      moneyEarned={achievement.moneyEarned}
      level={achievement.level}
      onHelp={handleHelp}
      modalReward={stateModal.reward}
      modalRewardClose={handleReward}
    />
  );
};

export default AchievementContainer;
