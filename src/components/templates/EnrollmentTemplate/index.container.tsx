import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useEnrollment from '@/hooks/useEnrollment';
import { RootState } from '@/stores/index';
import PATHS from '@/types/navigationPaths';
import { findRouteName } from '@/helpers/NavigationHelper';
import EnrollmentTemplateView from './index.view';
import { IEnrollmentTemplateProps } from './index.types';

const EnrollmentTemplateContainer = ({
  children,
  underline,
  disabled,
  navigationIcon,
  navigationTitle,
  navigationPath,
  onNext,
  textNext,
  onOther,
  textOther,
  showBoxShadow,
  wrapperMargin,
  wrapperMaxWidth,
  buttonsContainerPadding,
}: IEnrollmentTemplateProps) => {
  const {
    auth: { userInfo },
    enrollment: {
      programs: { prevProgram },
    },
    temporary: { appLogin },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const { fetchRestoreProgram, fetchAgreeAvailable, fetchUtility } = useEnrollment();

  useEffect(() => {
    const routeName = findRouteName(window.location);

    // 동의 취소하기
    if (routeName === 'NAV_CPA_VERIFY') {
      fetchAgreeAvailable(false);
    }

    // 유틸리티 취소하기
    if (routeName === 'NAV_AVAILABLE_PROGRAM_NORMAL') {
      fetchUtility('');
    }

    // 사용자 정보가 없으면 로그인으로 이동하기
    if (userInfo.id === '') {
      navigate(PATHS.SCREEN_ROOT);
    }

    if (window.ReactNativeWebView) {
      const data = JSON.stringify({ loading: false });
      window.ReactNativeWebView.postMessage(data);
    }
  }, []);

  const handleBack = () => {
    const routeName = findRouteName(window.location);

    if (routeName === 'NAV_AUTH_GUIDE_START') {
      if (window.ReactNativeWebView) {
        const data = JSON.stringify({ to: 'login', gbcStatus: userInfo.gbcStatus });
        window.ReactNativeWebView.postMessage(data);
      } else {
        navigate(PATHS.SCREEN_ROOT, { replace: true });
      }
    } else {
      // NotVerification에서도 사용중이다.
      navigate(-1);

      if (prevProgram.length > 1) {
        fetchRestoreProgram();
      }
    }
  };

  return (
    <EnrollmentTemplateView
      appLogin={appLogin}
      textNext={textNext}
      underline={underline}
      disabled={disabled}
      navigationIcon={navigationIcon}
      navigationTitle={navigationTitle}
      navigationPath={navigationPath}
      onBack={handleBack}
      onNext={onNext}
      onOther={onOther}
      textOther={textOther}
      showBoxShadow={showBoxShadow}
      wrapperMargin={wrapperMargin}
      wrapperMaxWidth={wrapperMaxWidth}
      buttonsContainerPadding={buttonsContainerPadding}
    >
      {children}
    </EnrollmentTemplateView>
  );
};

export default EnrollmentTemplateContainer;
