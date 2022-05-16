import { ReactNode } from 'react';

export enum SettingTabs {
  account = 'account',
  sites = 'sites',
  about = 'about',
  other = 'other',
}

export interface ISettingTemplateProps {
  children: ReactNode;
}

export interface ISettingTemplateViewProps extends ISettingTemplateProps {
  tabLinkSelected: SettingTabs;

  onTabClick: (tabName: SettingTabs, link?: string) => void;
}
