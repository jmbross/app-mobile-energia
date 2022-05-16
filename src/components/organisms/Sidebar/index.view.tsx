import React from 'react';
import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import PATHS from '@/types/navigationPaths';
import SidebarItem from './modules/SidebarItem';
import { Wrapper, Container, Logo } from './index.styles';
import { ISidebarViewProps } from './index.types';

const SidebarView = ({ path }: ISidebarViewProps) => {
  const { t } = useTranslation('common');

  const menus = [
    {
      id: nanoid(),
      title: t('screens.main.dashboard.dashboardScreen.title'),
      img: images.menuDashboardDeactive,
      selectedImg: images.menuDashboardActive,
      link: PATHS.SCREEN_DASHBOARD,
    },
    {
      id: nanoid(),
      title: t('screens.main.usagePattern.usagePatternScreen.title'),
      img: images.menuUsagePatternDeactive,
      selectedImg: images.menuUsagePatternActive,
      link: PATHS.SCREEN_USAGE_PATTERN,
    },
    {
      id: nanoid(),
      title: t('screens.main.savingsEvents.savingsEventsScreen.title'),
      img: images.menuDrDeactive,
      selectedImg: images.menuDrActive,
      link: PATHS.SCREEN_SAVING_EVENT,
    },
    {
      id: nanoid(),
      title: t('screens.main.messages.messagesScreen.title'),
      img: images.menuMessagesDeactive,
      selectedImg: images.menuMessagesActive,
      link: PATHS.SCREEN_MESSAGE,
    },
    {
      id: nanoid(),
      title: t('screens.main.settings.settingScreen.title'),
      img: images.menuSettingsDeactive,
      selectedImg: images.menuSettingsActive,
      link: PATHS.SCREEN_SETTING_ACCOUNT,
    },
  ];

  const makeLink = () => {
    if (path.split('/').length === 4) {
      return PATHS.SCREEN_SETTING_ACCOUNT;
    }

    return path;
  };

  return (
    <Wrapper>
      <Logo>
        <Img src={images.logoOlivineWebWhite} />
      </Logo>
      <Container>
        {menus.map(({ id, link, title, img, selectedImg }) => (
          <SidebarItem
            key={id}
            link={link}
            selected={makeLink() === link}
            title={title}
            img={img}
            selectedImg={selectedImg}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default SidebarView;
