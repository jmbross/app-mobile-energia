import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import DRStatusView from './index.view';

const DRStatusContainer = () => {
  const {
    dr: {
      event: { nearestDrEvents },
    },
  } = useSelector((state: RootState) => state);

  return <DRStatusView single={nearestDrEvents.length === 1} />;
};

export default DRStatusContainer;
