import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { moveChangeScreen } from '@/helpers/NavigationHelper';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import MultipleSurveyScreenView from './index.view';

const MultipleSurveyScreenContainer = () => {
  const {
    enrollment: {
      enrollmentInfo,
      programs,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ disabledNext: true });

  const navigate = useNavigate();
  const { fetchChangeProgram, fetchSurvey } = useEnrollment();

  useEffect(() => {
    validationCheck();
  }, [enrollmentInfo]);

  const validationCheck = () => {
    let answerCount = 0;
    enrollmentInfo.multipleSurvey.map((survey) => {
      answerCount += survey.answer !== '' ? 1 : 0;
      return survey;
    });

    const disabled = enrollmentInfo.multipleSurvey.length !== answerCount;

    setState({ ...state, disabledNext: disabled });
  };

  const handleNext = () => {
    const payload = enrollmentInfo.multipleSurvey;
    fetchSurvey(payload, () => {
      const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram);
      navigate(nextScreen);
    });
  };

  const handleNoThanks = () => {
    const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram);
    navigate(nextScreen);
  };

  return (
    <MultipleSurveyScreenView
      enrollmentProgram={currentProgram}
      disabledNext={state.disabledNext}
      onNext={handleNext}
      onNoThanks={handleNoThanks}
    />
  );
};

export default MultipleSurveyScreenContainer;
