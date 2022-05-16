import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import GridEmissionsView from './index.view';

const GridEmissionsContainer = () => {
  const {
    dashboard: { gridEmissions },
    main,
  } = useSelector((state: RootState) => state);
  const [stateModal, setStateModal] = useState({ gridEmissions: false });

  const handleHelp = () => {
    setStateModal({ ...stateModal, gridEmissions: true });
  };

  const handleModalGridEmissionsClose = () => {
    setStateModal({ ...stateModal, gridEmissions: false });
  };

  return (
    <GridEmissionsView
      mainState={main}
      item={gridEmissions}
      onHelp={handleHelp}
      modalGridEmissions={stateModal.gridEmissions}
      modalGridEmissionsClose={handleModalGridEmissionsClose}
    />
  );
};

export default GridEmissionsContainer;
