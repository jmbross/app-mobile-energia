import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { PerformanceToDateEnum } from '@/types/dr';
import SavingsEventsHistoryDetailView from './index.view';

const SavingsEventsHistoryDetailContainer = () => {
  const {
    dr: {
      history: {
        selectedTab,
        event: { selectedEvent },
        earnings: { selectedEarningsEvent },
      },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ tabSelected: 'quickView' });

  const [stateModal, setStateModal] = useState({ energyEvent: false });

  const handleTab = (link: string) => {
    setState({ tabSelected: link });
  };

  const handleHelp = () => {
    setStateModal({ ...stateModal, energyEvent: true });
  };

  const handleModalEnergyEventClose = () => {
    setStateModal({ ...stateModal, energyEvent: false });
  };

  return (
    <SavingsEventsHistoryDetailView
      item={selectedTab === PerformanceToDateEnum.events ? selectedEvent : selectedEarningsEvent}
      tabLinkSelected={state.tabSelected}
      onTabClick={handleTab}
      onHelp={handleHelp}
      modalEnergyEvent={stateModal.energyEvent}
      modalEnergyEventClose={handleModalEnergyEventClose}
    />
  );
};

export default SavingsEventsHistoryDetailContainer;
