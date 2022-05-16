import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import MultipleSurveyView from './index.view';

const MultipleSurveyContainer = () => {
  const {
    enrollment: {
      enrollmentInfo: { multipleSurvey },
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const { fetchMultipleSurvey } = useEnrollment();

  useEffect(() => {
    fetchMultipleSurvey(multipleSurvey);
  }, []);

  const handleChangeSurvey = (question: string, answer: string) => {
    const findIndex = multipleSurvey.findIndex((surveyAnswer) => surveyAnswer.question === question);

    if (findIndex > -1) {
      multipleSurvey[findIndex] = { program: currentProgram.program, question, answer };
    } else {
      multipleSurvey.push({
        program: currentProgram.program,
        question,
        answer,
      });
    }
    fetchMultipleSurvey(multipleSurvey);
  };

  return (
    <MultipleSurveyView
      program={currentProgram.program.toLowerCase()}
      surveyAnswer={multipleSurvey}
      onChangeSurvey={handleChangeSurvey}
    />
  );
};

export default MultipleSurveyContainer;
