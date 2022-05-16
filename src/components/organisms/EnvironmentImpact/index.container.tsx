import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import EnvironmentImpactView from './index.view';

const EnvironmentImpactContainer = () => {
  const {
    dashboard: { impact },
  } = useSelector((state: RootState) => state);

  const [stateModal, setStateModal] = useState({ environmentalImpact: false });

  const handleHelp = () => {
    setStateModal({ ...stateModal, environmentalImpact: true });
  };

  const handleModalEnvironmentalImpactClose = () => {
    setStateModal({ ...stateModal, environmentalImpact: false });
  };

  return (
    <EnvironmentImpactView
      item={impact}
      onHelp={handleHelp}
      modalEnvironmentalImpact={stateModal.environmentalImpact}
      modalEnvironmentalImpactClose={handleModalEnvironmentalImpactClose}
    />
  );
};

export default EnvironmentImpactContainer;
