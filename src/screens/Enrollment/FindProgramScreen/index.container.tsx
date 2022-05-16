import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useEnrollment from '@/hooks/useEnrollment';
import { moveChangeScreen } from '@/helpers/NavigationHelper';
import { RootState } from '@/stores/index';
import FindProgramScreenView from './index.view';

const FindProgramScreenContainer = () => {
  const {
    enrollment: {
      programs,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const { fetchChangeProgram } = useEnrollment();

  const handleNext = () => {
    const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram);
    navigate(nextScreen);
  };

  return <FindProgramScreenView onNext={handleNext} />;
};

export default FindProgramScreenContainer;
