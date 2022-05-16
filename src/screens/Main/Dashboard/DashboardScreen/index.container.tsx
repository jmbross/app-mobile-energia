import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAccount, useDashboard, useMain } from '@/hooks/index';
import { RootState } from '@/stores/index';
import { GBCStatus } from '@/types/auth';
import DashboardScreenView from './index.view';

const DashboardScreenContainer = () => {
  const {
    auth: { userInfo },
    main: { currentSite },
  } = useSelector((state: RootState) => state);

  const { fetchSites } = useMain();
  const { fetchUserInfo } = useAccount();
  const { fetchDashboard } = useDashboard();

  useEffect(() => {
    fetchUserInfo((gbcStatus: GBCStatus) => {
      if (gbcStatus === GBCStatus.completed && !currentSite) {
        fetchSites(userInfo.siteName);
      }
    });
  }, []);

  useEffect(() => {
    if (currentSite?.id) {
      fetchDashboard(currentSite.id);
    }
  }, [currentSite?.id]);

  return <DashboardScreenView isAuthenticated={userInfo.gbcStatus === GBCStatus.completed} />;
};

export default DashboardScreenContainer;
