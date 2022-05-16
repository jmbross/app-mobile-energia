import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { TMP_PATHS, changeProgram } from '@/helpers/NavigationHelper';
import useEnrollment from '@/hooks/useEnrollment';
import PATHS from '@/types/navigationPaths';
import GBCInCompleteView from './index.view';

const GBCInCompleteContainer = () => {
  const {
    enrollment: {
      enrollmentInfo: { program },
      programs,
    },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const { fetchChangeProgram } = useEnrollment();

  const handleTryAgain = () => {
    const history = [
      PATHS.SCREEN_ENROLLMENT_START_REGISTER,
      PATHS.SCREEN_ENROLLMENT_LOCATION_SETUP,
      PATHS.SCREEN_ENROLLMENT_PROFILE_SETUP,
      PATHS.SCREEN_ENROLLMENT_FIND_PROGRAM,
    ];

    const steps = changeProgram(programs, program, fetchChangeProgram).screenStep;

    let find = false;
    steps.map((screen) => {
      if (!find) {
        history.push(TMP_PATHS[screen.name]);
      }

      if (screen.name === 'NAV_CONNECT_UTILITY_NORMAL') {
        find = true;
      }

      return screen;
    });

    history.map((screen) => navigate(screen));
  };

  return <GBCInCompleteView onTryAgain={handleTryAgain} />;
};

export default GBCInCompleteContainer;
