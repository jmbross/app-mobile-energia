import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReqVerify } from '@/apis/enrollment/types';
import useEnrollment from '@/hooks/useEnrollment';
import { moveChangeScreen, moveNoThanksScreen } from '@/helpers/NavigationHelper';
import { isRange } from '@/helpers/EnrollmentHelper';
import { RootState } from '@/stores/index';
import PATHS from '@/types/navigationPaths';
import VerificationScreenView from './index.view';

const VerificationScreenContainer = () => {
  const {
    enrollment: {
      enrollmentInfo,
      programs,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ disabledNext: false });
  const [modal, setModal] = useState({ verification: false });

  const navigate = useNavigate();
  const { fetchChangeProgram, fetchVerify } = useEnrollment();

  useEffect(() => {
    validationCheck();
  }, [enrollmentInfo]);

  const validationCheck = () => {
    const disabled =
      !isRange(
        enrollmentInfo.verificationAccountNumber.length,
        currentProgram.accountMinLength,
        currentProgram.accountMaxLength,
      ) || enrollmentInfo.verificationName.length < 2;

    setState({ ...state, disabledNext: disabled });
  };

  const handleNext = () => {
    const payload: ReqVerify = {
      program: currentProgram.program,
      zipCode: enrollmentInfo.zipCode,
      lastName: enrollmentInfo.verificationName,
      accountNumber: enrollmentInfo.verificationAccountNumber,
    };

    fetchVerify(
      payload,
      () => {
        const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram);
        navigate(nextScreen);
      },
      () => {
        navigate(PATHS.SCREEN_ENROLLMENT_NOT_VERIFIED);
      },
    );
  };

  const handleNoThanks = () => {
    setModal({ ...modal, verification: true });
  };

  const handleModalVerificationClose = () => {
    setModal({ ...modal, verification: false });
  };

  const handleModalVerificationCancel = () => {
    const nextScreen = moveNoThanksScreen(currentProgram.screenStep, programs, fetchChangeProgram);
    navigate(nextScreen);
  };

  return (
    <VerificationScreenView
      enrollmentProgram={currentProgram}
      disabledNext={state.disabledNext}
      onNext={handleNext}
      onNoThanks={handleNoThanks}
      modalVerification={modal.verification}
      modalVerificationClose={handleModalVerificationClose}
      modalVerificationOk={handleModalVerificationClose}
      modalVerificationCancel={handleModalVerificationCancel}
    />
  );
};

export default VerificationScreenContainer;
