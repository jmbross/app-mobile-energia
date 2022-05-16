import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReqSurveyAnswer } from '@/apis/enrollment/types';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import { moveChangeScreen } from '@/helpers/NavigationHelper';
import SingleSurveyScreenView from './index.view';

const SingleSurveyScreenContainer = () => {
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
  }, [enrollmentInfo.singleSurvey]);

  const validationCheck = () => {
    const disabled = enrollmentInfo.singleSurvey.answer === '';

    setState({ ...state, disabledNext: disabled });
  };

  const handleNext = () => {
    const payload: ReqSurveyAnswer[] = [enrollmentInfo.singleSurvey];
    fetchSurvey(payload, () => {
      const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram);

      if (nextScreen === '/main/dashboard' && window.ReactNativeWebView) {
        const data = JSON.stringify({ to: 'dashboard' });
        window.ReactNativeWebView.postMessage(data);
      }

      navigate(nextScreen);
    });
  };

  const handleSkip = () => {
    const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram);
    if (nextScreen === '/main/dashboard' && window.ReactNativeWebView) {
      const data = JSON.stringify({ to: 'dashboard' });
      window.ReactNativeWebView.postMessage(data);
    }

    navigate(nextScreen);
  };

  return (
    <SingleSurveyScreenView
      enrollmentProgram={currentProgram}
      disabledNext={state.disabledNext}
      onNext={handleNext}
      onSkip={handleSkip}
    />
  );
};

export default SingleSurveyScreenContainer;
