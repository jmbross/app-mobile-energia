import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import { RootState } from '@/stores/index';
import { useAccount } from '@/hooks/index';
import PATHS from '@/types/navigationPaths';
import StartRegisterView from './index.view';

const StartRegisterContainer = () => {
  const {
    auth: { userInfo },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const { fetchUpdateUserInfo } = useAccount();

  useEffect(() => {
    // Olivine API를 통한 첫 로그인 시 cca에서도 인증처리를 한다
    if (userInfo.id && !userInfo.isAuthenticated) {
      const payload: ReqUpdateUserInfo = {
        isAuthenticated: true,
      };

      fetchUpdateUserInfo(payload);
    }
  }, []);

  const handleNext = () => {
    if (window.ReactNativeWebView) {
      const data = JSON.stringify({ loading: true });
      window.ReactNativeWebView.postMessage(data);
    }

    navigate(PATHS.SCREEN_ENROLLMENT_PROFILE_SETUP);
  };

  return <StartRegisterView onNext={handleNext} />;
};

export default StartRegisterContainer;
