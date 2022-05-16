import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import SingleSurveyView from './index.view';

const SingleSurveyContainer = () => {
  const {
    enrollment: {
      enrollmentInfo: { singleSurvey },
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const { fetchSingleSurvey } = useEnrollment();

  const handleChangeSurvey = (question: string, answer: string) => {
    if (singleSurvey.answer === answer) {
      return;
    }

    fetchSingleSurvey({
      program: currentProgram.program,
      question,
      answer,
      other: undefined,
      referralName: undefined,
      referralEmail: undefined,
      referralPhoneNumber: undefined,
    });
  };

  const handleChangeReferralName = (value: string) => {
    fetchSingleSurvey({ ...singleSurvey, referralName: value });
  };

  const handleChangeReferralEmail = (value: string) => {
    fetchSingleSurvey({ ...singleSurvey, referralEmail: value });
  };

  const handleReferralPhoneNumber = (value: string) => {
    fetchSingleSurvey({ ...singleSurvey, referralPhoneNumber: value });
  };

  const handleChangeOther = (value: string) => {
    fetchSingleSurvey(Object.assign(singleSurvey, { other: value }));
  };

  return (
    <SingleSurveyView
      programName={currentProgram.program.toLowerCase()}
      surveyAnswer={singleSurvey}
      referralName={singleSurvey.referralName}
      referralEmail={singleSurvey.referralEmail}
      referralPhoneNumber={singleSurvey.referralPhoneNumber}
      other={singleSurvey.other}
      onChangeSurvey={handleChangeSurvey}
      onChangeReferralName={handleChangeReferralName}
      onChangeReferralEmail={handleChangeReferralEmail}
      onChangeReferralPhoneNumber={handleReferralPhoneNumber}
      onChangeOther={handleChangeOther}
    />
  );
};

export default SingleSurveyContainer;
