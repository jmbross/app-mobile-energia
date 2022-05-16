import React from 'react';
import { useTranslation } from 'react-i18next';
import Tabs from '@/molecules/Tabs';
import PATHS from '@/types/navigationPaths';
import { ISettingTemplateViewProps, SettingTabs } from './index.types';
import { Wrapper, Header, Body } from './index.styles';

const SettingTemplateView = ({ children, tabLinkSelected, onTabClick }: ISettingTemplateViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Header>
        <Tabs
          tabs={[
            {
              id: 0,
              title: t('screens.main.settings.account.accountScreen.title').toUpperCase(),
              tabName: SettingTabs.account,
              link: PATHS.SCREEN_SETTING_ACCOUNT,
            },
            {
              id: 1,
              title: t('screens.main.settings.mySites.mySitesScreen.title').toUpperCase(),
              tabName: SettingTabs.sites,
              link: PATHS.SCREEN_SETTING_MY_SITES,
            },
            {
              id: 2,
              title: t('screens.main.settings.aboutScreen.title').toUpperCase(),
              tabName: SettingTabs.about,
              link: PATHS.SCREEN_SETTING_ABOUT,
            },
            {
              id: 3,
              title: t('screens.main.settings.otherScreen.title').toUpperCase(),
              tabName: SettingTabs.other,
              link: PATHS.SCREEN_SETTING_OTHER,
            },
          ]}
          selected={tabLinkSelected}
          onClick={(value, link) => onTabClick(value as SettingTabs, link)}
        />
      </Header>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default SettingTemplateView;
