import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import { moveChangeScreen } from '@/helpers/NavigationHelper';
import { RootState } from '@/stores/index';
import PATHS from '@/types/navigationPaths';
import AccountVerificationSCEView from './index.view';
import { Utilities } from '../../../components/organisms/AccountVerification/index.types';
import useEnrollment from '../../../hooks/useEnrollment';

const AccountVerificationSCEContainer = () => {
  const {
    enrollment: {
      enrollmentInfo: {
        serviceFirstName,
        serviceLastName,
        serviceAccountNumber,
        serviceAddress,
        serviceCity,
        serviceZip,
        servicePhone,
        serviceEmail,
        utility,
        zipCode,
      },
      programs,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const { fetchVerify, fetchChangeProgram } = useEnrollment();

  const disabled =
    utility === Utilities.PGE
      ? !serviceFirstName ||
        !serviceLastName ||
        [servicePhone, serviceEmail, serviceAccountNumber].filter((field) => !!field).length < 2
      : !serviceFirstName ||
        !serviceLastName ||
        !serviceAccountNumber ||
        !serviceAddress ||
        !serviceCity ||
        !serviceZip;

  const handleNext = () => {
    const payload: ReqUpdateUserInfo =
      utility === Utilities.PGE
        ? {
            program: currentProgram.program,
            zipCode,
            serviceFirstName,
            serviceLastName,
            serviceAccountNumber,
            servicePhone,
            serviceEmail,
          }
        : {
            program: currentProgram.program,
            zipCode,
            serviceFirstName,
            serviceLastName,
            serviceAccountNumber,
            serviceAddress,
            serviceCity,
            serviceZip,
          };

    fetchVerify(
      payload,
      () => {
        const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram);
        navigate(nextScreen);
      },
      () => {
        navigate(PATHS.SCREEN_ENROLLMENT_FIND_PROGRAM);
      },
    );
  };

  return <AccountVerificationSCEView disabledNext={disabled} onNext={handleNext} />;
};

export default AccountVerificationSCEContainer;
