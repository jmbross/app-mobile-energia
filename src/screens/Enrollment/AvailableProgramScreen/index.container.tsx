import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isNoThanks, moveChangeScreen, moveNoThanksScreen } from '@/helpers/NavigationHelper';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import AvailableProgramScreenView from './index.view';

const AvailableProgramScreenContainer = () => {
  const {
    enrollment: {
      enrollmentInfo,
      programs,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ visibleNoThanks: true, disabledNext: false });

  const navigate = useNavigate();
  const { fetchResetGBC, fetchGBCResult, fetchChangeProgram } = useEnrollment();

  useEffect(() => {
    fetchResetGBC();
    fetchGBCResult('');
  }, []);

  useEffect(() => {
    validationCheck();
  }, [enrollmentInfo, currentProgram]);

  const validationCheck = () => {
    const disabled = !enrollmentInfo.agreeAvailable;
    const visibleNoThanks = isNoThanks(currentProgram.screenStep);

    setState({ ...state, disabledNext: disabled, visibleNoThanks });
  };

  const handleNext = () => {
    // areAllServiceAccountsAuthorized - free pass
    const addStep = enrollmentInfo.areAllServiceAccountsAuthorized ? 3 : 1;

    const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram, addStep);
    navigate(nextScreen);
  };

  const handleNoThanks = () => {
    const nextScreen = moveNoThanksScreen(currentProgram.screenStep, programs, fetchChangeProgram);
    navigate(nextScreen);
  };

  return (
    <AvailableProgramScreenView
      enrollmentProgram={currentProgram}
      disabledNext={state.disabledNext}
      isNoThanks={state.visibleNoThanks}
      onNext={handleNext}
      onNoThanks={handleNoThanks}
    />
  );
};

export default AvailableProgramScreenContainer;
