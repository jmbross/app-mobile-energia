import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@/stores/index';
import PATHS from '@/types/navigationPaths';
import WebStoreScreenView from './index.view';

const WebStoreScreenContainer = () => {
  const {
    enrollment: {
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();

  const handleNoThanks = () => {
    if (window.ReactNativeWebView) {
      const data = JSON.stringify({ to: 'dashboard' });
      window.ReactNativeWebView.postMessage(data);
    }

    navigate(PATHS.SCREEN_DASHBOARD);
  };

  return <WebStoreScreenView enrollmentProgram={currentProgram} onNoThanks={handleNoThanks} />;
};

export default WebStoreScreenContainer;
