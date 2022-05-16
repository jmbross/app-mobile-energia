import React from 'react';
import WebStoreView from './index.view';

const WebStoreContainer = () => {
  const handleClickVisit = (url: string) => {
    window.open(url, '_blank');
  };

  return <WebStoreView onClickVisit={handleClickVisit} />;
};

export default WebStoreContainer;
