import React, { useEffect, useState } from 'react';
import SettingTemplateView from './index.view';
import { ISettingTemplateProps, SettingTabs } from './index.types';

const SettingTemplateContainer = ({ children }: ISettingTemplateProps) => {
  const [state, setState] = useState<{ tabSelected: SettingTabs }>({ tabSelected: SettingTabs.account });

  useEffect(() => {
    setState({ ...state, tabSelected: window.location.pathname.split('/').pop() as SettingTabs });
  }, []);

  const handleTab = (tabName: SettingTabs, link?: string) => {
    if (state.tabSelected === tabName) {
      return;
    }

    setState({ tabSelected: tabName });

    if (link) {
      window.location.href = link;
    }
  };

  return (
    <SettingTemplateView tabLinkSelected={state.tabSelected} onTabClick={handleTab}>
      {children}
    </SettingTemplateView>
  );
};

export default SettingTemplateContainer;
