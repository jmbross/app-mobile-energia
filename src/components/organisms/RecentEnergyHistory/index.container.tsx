import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import RecentEnergyHistoryView from './index.view';

const RecentEnergyHistoryContainer = () => {
  const {
    dashboard: { history },
  } = useSelector((state: RootState) => state);

  const [stateModal, setStateModal] = useState({ energyInformation: false });

  const handleHelp = () => {
    setStateModal({ ...stateModal, energyInformation: true });
  };

  const handleModalEnergyHistoryClose = () => {
    setStateModal({ ...stateModal, energyInformation: false });
  };

  return (
    <RecentEnergyHistoryView
      item={history}
      onHelp={handleHelp}
      modalEnergyHistory={stateModal.energyInformation}
      modalEnergyHistoryClose={handleModalEnergyHistoryClose}
    />
  );
};

export default RecentEnergyHistoryContainer;
