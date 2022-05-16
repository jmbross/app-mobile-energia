import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import useAccount from '@/hooks/useAccount';
import { RootState } from '@/stores/index';
import PATHS from '@/types/navigationPaths';
import ProfileSetupScreenView from './index.view';

const ProfileSetupScreenContainer = () => {
  const {
    enrollment: { enrollmentInfo },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ disabledNext: true });

  const navigate = useNavigate();
  const { fetchUpdateUserInfo } = useAccount();

  useEffect(() => {
    validationCheck();
  }, [enrollmentInfo]);

  const validationCheck = () => {
    const disabled = enrollmentInfo.firstName.length < 2 || enrollmentInfo.lastName.length < 2;
    setState({ ...state, disabledNext: disabled });
  };

  const handleNext = () => {
    const payload: ReqUpdateUserInfo = {
      firstName: enrollmentInfo.firstName,
      lastName: enrollmentInfo.lastName,
    };

    fetchUpdateUserInfo(payload, () => {
      if (window.ReactNativeWebView) {
        const data = JSON.stringify({ loading: true });
        window.ReactNativeWebView.postMessage(data);
      }

      navigate(PATHS.SCREEN_ENROLLMENT_LOCATION_SETUP);
    });
  };

  return <ProfileSetupScreenView disabledNext={state.disabledNext} onNext={handleNext} />;
};

export default ProfileSetupScreenContainer;
