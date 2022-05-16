import React from 'react';
import UsagePattern from '@/organisms/UsagePattern';
import GBCStatus from '@/organisms/GBCStatus';
import MainTemplate from '@/templates/MainTemplate';
import { IUsagePatternScreenViewProps } from './index.types';

const UsagePatternScreenView = ({ isAuthenticated }: IUsagePatternScreenViewProps) => {
  return <MainTemplate>{isAuthenticated ? <UsagePattern /> : <GBCStatus />}</MainTemplate>;
};

export default UsagePatternScreenView;
