import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { useEnrollment, useMain } from '@/hooks/index';
import { GBCStatus } from '@/types/auth';
import MainTemplateView from './index.view';
import { IMainTemplateProps } from './index.types';

const MainTemplateContainer = ({ children }: IMainTemplateProps) => {
  const {
    auth: {
      userInfo: { gbcStatus },
    },
    enrollment: {
      enrollmentInfo: { gbcUrlResult, zipCode },
    },
    main: { hamburgerOpen },
  } = useSelector((state: RootState) => state);

  const { fetchChangeHamburger } = useMain();
  const { fetchProgramRequest, fetchGBCResult } = useEnrollment();

  useEffect(() => {
    fetchChangeHamburger(false);

    if (gbcStatus !== GBCStatus.completed && zipCode) {
      fetchProgramRequest(zipCode);
    }

    if (gbcUrlResult !== '') {
      fetchGBCResult('');
    }
  }, []);

  return <MainTemplateView hamburgerOpen={hamburgerOpen}>{children}</MainTemplateView>;
};

export default MainTemplateContainer;
