import React, { useEffect, useState } from 'react';
import { GBCStatus } from '@/types/auth';
import { useSelector } from 'react-redux';
import useAccount from '@/hooks/useAccount';
import { RootState } from '@/stores/index';
import LoginView from './index.view';

const LoginContainer = () => {
  const {
    auth: { authUrl, userInfo },
    setting: { language },
  } = useSelector((state: RootState) => state);

  // run : 로그인/회원가입 프로세스를 진행했는지 판단한다
  const [state, setState] = useState({ run: false });

  const { fetchLogin, fetchRegister, fetchLogout } = useAccount();

  const isLogin = () => {
    return userInfo.gbcStatus !== GBCStatus.none;
  };

  const handleStarted = () => {
    setState({ ...state, run: true });
    fetchRegister(language);
  };

  const handleSignIn = () => {
    setState({ ...state, run: true });
    fetchLogin(language);
  };

  const handleContinue = () => {
    setState({ ...state, run: true });
    fetchLogin(language);
  };

  const handleLogout = () => {
    fetchLogout(userInfo.oidcIdToken, userInfo.id);
  };

  useEffect(() => {
    // 로그인/회원가입 프로세스를 진행한 후 olivine 공통 로그인 페이지로 이동한다
    if (state.run && authUrl) {
      window.location.href = authUrl;
    }
  }, [state, authUrl]);

  return (
    <LoginView
      isAuthenticated={isLogin()}
      onStarted={handleStarted}
      onSignIn={handleSignIn}
      onContinue={handleContinue}
      onLogout={handleLogout}
    />
  );
};

export default LoginContainer;
