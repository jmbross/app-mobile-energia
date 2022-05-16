import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDr, useMain } from '@/hooks/index';
import { RootState } from '@/stores/index';
import { GBCStatus } from '@/types/auth';
import SavingsEventsScreenView from './index.view';

const SavingsEventsScreenContainer = () => {
  const {
    auth: { userInfo },
    main: { currentSite },
  } = useSelector((state: RootState) => state);

  const { fetchSites } = useMain();
  const { fetchDr } = useDr();

  useEffect(() => {
    if (userInfo.gbcStatus === GBCStatus.completed && !currentSite) {
      fetchSites(userInfo.siteName);
    }
  }, []);

  useEffect(() => {
    if (currentSite) {
      fetchDr(currentSite.id);
    }
  }, [currentSite?.id]);

  return <SavingsEventsScreenView isAuthenticated={userInfo.gbcStatus === GBCStatus.completed} />;
};

export default SavingsEventsScreenContainer;
