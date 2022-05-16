import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { useMain } from '@/hooks/index';
import AppbarView from './index.view';

const AppbarContainer = () => {
  const {
    main: {
      hamburgerOpen,
      sites: { sites },
      currentSite,
    },
  } = useSelector((state: RootState) => state);

  const { fetchChangeSite, fetchChangeHamburger } = useMain();

  const handleChangeLanguage = (siteId: string) => {
    if (currentSite?.id === siteId) {
      return;
    }

    fetchChangeSite(siteId);
  };

  const handleChangeHamburger = () => {
    fetchChangeHamburger(!hamburgerOpen);
  };

  return (
    <AppbarView
      sites={sites}
      currentSite={currentSite?.id}
      onChangeSite={handleChangeLanguage}
      onChangeHamburger={handleChangeHamburger}
    />
  );
};

export default AppbarContainer;
