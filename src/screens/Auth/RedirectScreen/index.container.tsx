import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMain, useAccount } from '@/hooks/index';
import { setLocalToken } from '@/services/token';
import PATHS from '@/types/navigationPaths';
import { GBCStatus } from '@/types/auth';
import { RootState } from '@/stores/index';
import useSetting from '@/hooks/useSetting';
import { TempScale } from '@/types/setting';
import { ReqSetting } from '@/apis/auth/types';
import { useTranslation } from 'react-i18next';
import RedirectView from './index.view';

const RedirectContainer = () => {
  const {
    auth: { userInfo },
    setting: { language },
    auth,
  } = useSelector((state: RootState) => state);
  const { fetchSetting } = useSetting();
  const navigate = useNavigate();
  const { fetchUserInfo, cleanOldState } = useAccount();
  const { fetchSites } = useMain();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const accessToken = urlSearchParams.get('accessToken');

    if (!accessToken) {
      // 잘못된 접근이므로 루트로 보내기
      navigate(PATHS.SCREEN_ROOT, { replace: true });
      return;
    }

    setLocalToken(accessToken);

    cleanOldState();

    fetchUserInfo((gbcStatus: GBCStatus) => {
      if ([GBCStatus.none, GBCStatus.notStarted].includes(gbcStatus)) {
        navigate(PATHS.SCREEN_ENROLLMENT_START_REGISTER);
      } else {
        if (window.ReactNativeWebView) {
          const data = JSON.stringify({ to: 'dashboard', gbcStatus: userInfo.gbcStatus });
          window.ReactNativeWebView.postMessage(data);
        } else {
          console.log(`not window.ReactNativeWebView`);
        }

        if (userInfo.gbcStatus === GBCStatus.completed) {
          fetchSites(userInfo.siteName);
        }

        navigate(PATHS.SCREEN_DASHBOARD);
      }
    });
  }, []);
  const { i18n } = useTranslation();
  useEffect(() => {
    if (
      language.toLowerCase() !== auth.userInfo.language.toLowerCase() ||
      language.toLowerCase() !== i18n.language.toLowerCase()
    ) {
      const payload: ReqSetting = {
        language,
        tempScale: TempScale.celsius,
      };
      fetchSetting(payload);
    }
  }, []);
  return <RedirectView />;
};

export default RedirectContainer;
