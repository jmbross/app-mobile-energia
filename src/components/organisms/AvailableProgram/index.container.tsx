import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import AvailableProgramView from './index.view';

const AvailableProgramContainer = () => {
  const {
    enrollment: {
      enrollmentInfo,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const { fetchAgreeAvailable } = useEnrollment();

  const handleChangeAgree = () => {
    fetchAgreeAvailable(!enrollmentInfo.agreeAvailable);
  };

  return (
    <AvailableProgramView
      program={currentProgram.program.toLowerCase()}
      agree={enrollmentInfo.agreeAvailable}
      onChangeAgree={handleChangeAgree}
    />
  );
};

export default AvailableProgramContainer;
