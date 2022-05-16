import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import WelcomeScreen from '@/screens/Auth/WelcomeScreen';
import AppLoginScreen from '@/screens/Auth/AppLoginScreen';
import RedirectScreen from '@/screens/Auth/RedirectScreen';
import StartRegisterScreen from '@/screens/Enrollment/StartRegisterScreen';
import ProfileSetupScreen from '@/screens/Enrollment/ProfileSetupScreen';
import LocationSetupScreen from '@/screens/Enrollment/LocationSetupScreen';
import SelectUtilityScreen from '@/screens/Enrollment/SelectUtilityScreen';
import AccountVerificationScreen from '@/screens/Enrollment/AccountVerificationScreen';
import FindProgramScreen from '@/screens/Enrollment/FindProgramScreen';
import VerificationScreen from '@/screens/Enrollment/VerificationScreen';
import NotVerifiedScreen from '@/screens/Enrollment/NotVerifiedScreen';
import AvailableProgramScreen from '@/screens/Enrollment/AvailableProgramScreen';
import CPAPhoneNumberScreen from '@/screens/Enrollment/CPAPhoneNumberScreen';
import CPAProgramListScreen from '@/screens/Enrollment/CPAProgramListScreen';
import ConnectToUtilityScreen from '@/screens/Enrollment/ConnectToUtilityScreen';
import MultipleSurveyScreen from '@/screens/Enrollment/MultipleSurveyScreen';
import SingleSurveyScreen from '@/screens/Enrollment/SingleSurveyScreen';
import UtilityWebViewScreen from '@/screens/Enrollment/WebStoreScreen';

import DashboardScreen from '@/screens/Main/Dashboard/DashboardScreen';
import UsagePatternScreen from '@/screens/Main/UsagePattern/UsagePatternScreen';
import SavingsEventsScreen from '@/screens/Main/SavingsEvents/SavingsEventsScreen';
import MessagesScreen from '@/screens/Main/Messages/MessagesScreen';
import AccountScreen from '@/screens/Main/Settings/Account/AccountScreen';
import AboutScreen from '@/screens/Main/Settings/AboutScreen';
import MySitesScreen from '@/screens/Main/Settings/MySites/MySitesScreen';
import OtherScreen from '@/screens/Main/Settings/OtherScreen';
import NotFoundScreen from '@/screens/Error/NotFoundScreen';

import { GOOGLE_ANALYTICS_ID, WEB_HOST, APP_DEEP_LINK, APP_STORE_LINK } from '@/constants/environment';
import { initGA, logPageView } from '@/helpers/GAHelper';
import PATHS from '@/types/navigationPaths';
import { RootState } from '@/stores/index';
import { GBCStatus } from '@/types/auth';
import Loading from '@/molecules/Loading';
import { changeMomentLocale } from '@/helpers/LanguageHelper';
import { isMobile, isAndroid, isIOS } from 'react-device-detect';
import { confirmAlert } from 'react-confirm-alert';
import '@/assets/styles/react-confirm-alert.css';

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

const App = () => {
  // Unregister service workers from the old app
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }

  const {
    loading: { loading },
    auth: {
      userInfo: { gbcStatus },
    },
    setting: { language },
    temporary: { appLogin },
  } = useSelector((state: RootState) => state);

  const location = useLocation();
  const { i18n } = useTranslation();

  const switchToApp = () => {
    // TODO: appLogin을 window.ReactNativeWebView로 대체하는것이 어떨까? 리액트에서 appLogin를 불러와서 느리다.

    if (!isMobile || window.ReactNativeWebView) {
      return;
    }

    // TODO: language 파일에 추가한다.
    confirmAlert({
      title: 'Switch to app?',
      message: '',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            const uri = isAndroid
              ? `intent://${WEB_HOST}/#Intent;scheme=com.olivinecommunity.mobile;package=com.olivinecommunity.mobile;end`
              : APP_DEEP_LINK;
            try {
              window.location.href = uri;

              if (isIOS) {
                setTimeout(() => {
                  window.location.href = APP_STORE_LINK;
                }, 100);
              }
            } catch (err) {
              console.log(err);
            }
          },
        },
        {
          label: 'No',
          onClick: () => {
            // Do nothing
          },
        },
      ],
    });
  };

  useEffect(() => {
    i18n.changeLanguage(language.toLowerCase());
    changeMomentLocale(language);

    switchToApp();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!window.GA_INITIALIZED) {
      initGA(GOOGLE_ANALYTICS_ID);
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }, [location]);

  return (
    <Loading loading={appLogin ? false : loading}>
      <Routes>
        <Route index element={<WelcomeScreen />} />
        <Route path={PATHS.SCREEN_APP_LOGIN} element={<AppLoginScreen />} />
        <Route path={PATHS.SCREEN_AUTH_REDIRECT} element={<RedirectScreen />} />

        <Route path={PATHS.SCREEN_ENROLLMENT_START_REGISTER} element={<StartRegisterScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_PROFILE_SETUP} element={<ProfileSetupScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_LOCATION_SETUP} element={<LocationSetupScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_SELECT_UTILITY} element={<SelectUtilityScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_ACCOUNT_VERIFICATION} element={<AccountVerificationScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_FIND_PROGRAM} element={<FindProgramScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_VERIFICATION} element={<VerificationScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_NOT_VERIFIED} element={<NotVerifiedScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_AVAILABLE_PROGRAM} element={<AvailableProgramScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_CPA_PHONE_NUMBER} element={<CPAPhoneNumberScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_CPA_PROGRAM_LIST} element={<CPAProgramListScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_CONNECT_TO_UTILITY} element={<ConnectToUtilityScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_MULTIPLE_SURVEY} element={<MultipleSurveyScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_SINGLE_SURVEY} element={<SingleSurveyScreen />} />
        <Route path={PATHS.SCREEN_ENROLLMENT_WEB_STORE} element={<UtilityWebViewScreen />} />

        <Route path={PATHS.SCREEN_DASHBOARD} element={<DashboardScreen />} />
        <Route path={PATHS.SCREEN_USAGE_PATTERN} element={<UsagePatternScreen />} />
        <Route path={PATHS.SCREEN_SAVING_EVENT} element={<SavingsEventsScreen />} />
        <Route path={PATHS.SCREEN_MESSAGE} element={<MessagesScreen />} />
        <Route path={PATHS.SCREEN_SETTING_ACCOUNT} element={<AccountScreen />} />
        <Route path={PATHS.SCREEN_SETTING_MY_SITES} element={<MySitesScreen />} />
        <Route path={PATHS.SCREEN_SETTING_OTHER} element={<OtherScreen />} />
        <Route path={PATHS.SCREEN_SETTING_ABOUT} element={<AboutScreen />} />

        <Route path="/*" element={gbcStatus === GBCStatus.notStarted ? <Navigate to="/" /> : <NotFoundScreen />} />
      </Routes>
    </Loading>
  );
};

export default App;
