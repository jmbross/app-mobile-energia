import React from 'react';
import SidebarView from './index.view';

const SidebarContainer = () => {
  return <SidebarView path={window.location.pathname} />;
};

export default SidebarContainer;
