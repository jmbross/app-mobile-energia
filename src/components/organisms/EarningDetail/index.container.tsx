import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import EarningDetailView from './index.view';

const EarningDetailContainer = () => {
  const {
    dr: {
      history: {
        earnings: { selectedEarnings },
      },
    },
  } = useSelector((state: RootState) => state);

  return <EarningDetailView item={selectedEarnings} />;
};

export default EarningDetailContainer;
