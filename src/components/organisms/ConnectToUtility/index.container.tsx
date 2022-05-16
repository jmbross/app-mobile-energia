import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import ConnectToUtilityView from './index.view';

const ConnectToUtilityContainer = () => {
  const {
    enrollment: {
      enrollmentInfo,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const { fetchUtility } = useEnrollment();

  useEffect(() => {
    fetchUtility(enrollmentInfo.utility);
  }, []);

  const handleChangeUtility = (value: string) => {
    fetchUtility(value);
  };

  return (
    <ConnectToUtilityView
      programName={currentProgram.program.toLowerCase()}
      utility={enrollmentInfo.utility}
      onChangeUtility={handleChangeUtility}
    />
  );
};

export default ConnectToUtilityContainer;
