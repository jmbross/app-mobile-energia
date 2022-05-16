import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useEnrollment from '@/hooks/useEnrollment';
import { moveChangeScreen } from '@/helpers/NavigationHelper';
import { RootState } from '@/stores/index';
import NotVerifiedScreenView from './index.view';

const NotVerifiedScreenContainer = () => {
  const {
    enrollment: {
      programs,
      programs: { currentProgram, prevProgram },
    },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const { fetchRestoreProgram, fetchChangeProgram } = useEnrollment();

  const handleTryAgain = () => {
    // EnrollmentTemplate에서도 사용중이다.
    navigate(-1);

    if (prevProgram.length > 1) {
      fetchRestoreProgram();
    }
  };

  const handleNoThanks = () => {
    const nextScreen = moveChangeScreen(programs, 'OLIVINE_ENERGY', fetchChangeProgram);
    navigate(nextScreen);
  };

  return (
    <NotVerifiedScreenView enrollmentProgram={currentProgram} onTryAgain={handleTryAgain} onNoThanks={handleNoThanks} />
  );
};

export default NotVerifiedScreenContainer;
