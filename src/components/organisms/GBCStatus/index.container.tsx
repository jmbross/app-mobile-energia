import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { useEnrollment } from '@/hooks/index';
import GBCStatusView from './index.view';

const GBCStatusContainer = () => {
  const {
    auth: { userInfo },
    enrollment: {
      enrollmentInfo: { program },
    },
  } = useSelector((state: RootState) => state);

  const { fetchRecentRequest } = useEnrollment();

  useEffect(() => {
    fetchRecentRequest();
  }, [fetchRecentRequest]);

  return <GBCStatusView programName={program.toLowerCase()} gbcStatus={userInfo.gbcStatus} />;
};

export default GBCStatusContainer;
