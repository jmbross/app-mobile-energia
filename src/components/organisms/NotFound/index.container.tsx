import React from 'react';
import { useNavigate } from 'react-router-dom';
import PATHS from '@/types/navigationPaths';
import NotFoundView from './index.view';

const NotFoundContainer = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // TODO: Enrollment에서 에러가 나는 경우는 어떻게 할것인가?
    // 그럼 'go to dashboard'의 문구가 변경되야 한다.
    navigate(PATHS.SCREEN_DASHBOARD);
  };

  return <NotFoundView onGoBack={handleGoBack} />;
};

export default NotFoundContainer;
