import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReqUsagePattern } from '@/apis/primary/types';
import { RootState } from '@/stores/index';
import useUsagePattern from '@/hooks/useUsagePattern';
import { useMain } from '@/hooks/index';
import { GBCStatus } from '@/types/auth';
import UsagePatternScreenView from './index.view';

const UsagePatternScreenContainer = () => {
  const {
    auth: { userInfo },
    main: { currentSite },
    usagePattern: { usagePatternPeriod },
  } = useSelector((state: RootState) => state);

  const { fetchSites } = useMain();
  const { fetchUsagePattern } = useUsagePattern();

  useEffect(() => {
    if (userInfo.gbcStatus === GBCStatus.completed && !currentSite) {
      fetchSites(userInfo.siteName);
    }
  }, []);

  useEffect(() => {
    if (currentSite) {
      const payload: ReqUsagePattern = {
        siteId: currentSite?.id,
        timePeriod: usagePatternPeriod,
        range: 'initial',
      };
      fetchUsagePattern(payload);
    }
  }, [currentSite?.id, usagePatternPeriod]);

  return <UsagePatternScreenView isAuthenticated={userInfo.gbcStatus === GBCStatus.completed} />;
};

export default UsagePatternScreenContainer;
