import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import PATHS from '@/types/navigationPaths';
import { RootState } from '@/stores/index';
import { useAccount, useEnrollment } from '@/hooks/index';
import LocationSetupScreenView from './index.view';

const LocationSetupScreenContainer = () => {
  const {
    enrollment: { enrollmentInfo },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ disabledNext: true });
  const [modal, setModal] = useState({ zipCode: false, noPrograms: false });

  const navigate = useNavigate();
  const { fetchUpdateUserInfo } = useAccount();
  const { fetchProgramRequest, fetchChangePrograms } = useEnrollment();

  useEffect(() => {
    validationCheck();
  }, [enrollmentInfo]);

  const validationCheck = () => {
    const disabled = enrollmentInfo.zipCode.length !== 5 || enrollmentInfo.siteName.length < 2;
    setState({ ...state, disabledNext: disabled });
  };

  const handleNext = () => {
    setModal((modalState) => ({ ...modalState, zipCode: true }));
  };

  const handleModalZipcodeOk = () => {
    const payload: ReqUpdateUserInfo = {
      isLocationBusiness: enrollmentInfo.isBusiness,
      zipcode: enrollmentInfo.zipCode,
      siteName: enrollmentInfo.siteName,
    };

    fetchUpdateUserInfo(payload, () => {
      if (window.ReactNativeWebView) {
        const data = JSON.stringify({ loading: true });
        window.ReactNativeWebView.postMessage(data);
      }

      fetchProgramRequest(enrollmentInfo.zipCode ?? '', (utilityPrograms) => {
        if (Object.keys(utilityPrograms).length > 1) {
          navigate(PATHS.SCREEN_ENROLLMENT_SELECT_UTILITY);
        } else {
          const programs = Object.values(utilityPrograms);
          // if there's only one utility, it selects its programs, otherwise it goes to no programs screen
          if (programs.length === 1) {
            if (programs[0].length === 0) {
              setModal({ zipCode: false, noPrograms: true });
            } else {
              fetchChangePrograms(programs[0]);
              navigate(PATHS.SCREEN_ENROLLMENT_ACCOUNT_VERIFICATION);
            }
          } else {
            setModal({ zipCode: false, noPrograms: true });
          }
        }
      });
    });
  };

  const handleModalZipcodeCancel = () => {
    setModal((modalState) => ({ ...modalState, zipCode: false }));
  };

  const handleNoProgramsOk = () => {
    setModal((modalState) => ({ ...modalState, noPrograms: false }));
  };

  return (
    <LocationSetupScreenView
      disabledNext={state.disabledNext}
      onNext={handleNext}
      modalZipcode={modal.zipCode}
      modalZipcodeClose={handleModalZipcodeCancel}
      modalZipcodeOk={handleModalZipcodeOk}
      modalZipcodeCancel={handleModalZipcodeCancel}
      modalNoPrograms={modal.noPrograms}
      modalNoProgramsOk={handleNoProgramsOk}
    />
  );
};

export default LocationSetupScreenContainer;
