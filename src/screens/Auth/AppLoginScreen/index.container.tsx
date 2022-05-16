import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTemporary } from '@/hooks/index';
import { RootState } from '@/stores/index';
import PATHS from '@/types/navigationPaths';
import { changeProgram, TMP_PATHS } from '@/helpers/NavigationHelper';
import useEnrollment from '@/hooks/useEnrollment';
import { useNavigate } from 'react-router-dom';

const WelcomeContainer = () => {
  const {
    enrollment: { programs },
    temporary: { appLogin },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ authUrl?: string }>({ authUrl: undefined });

  // run : 로그인/회원가입 프로세스를 진행했는지 판단한다
  const { fetchChangeAppLogin } = useTemporary();
  const { fetchChangeProgram } = useEnrollment();
  const navigate = useNavigate();

  useEffect(() => {
    // 로그인/회원가입 프로세스를 진행한 후 olivine 공통 로그인 페이지로 이동한다
    if (appLogin && state.authUrl) {
      window.location.href = state.authUrl;
    }
  }, [appLogin, state.authUrl]);

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      const { data: rawData } = event;
      if (rawData !== undefined) {
        const { type, data } = rawData;

        fetchChangeAppLogin(true);

        if (type === 'login') {
          setState({ ...state, authUrl: data });
        } else if (type === 'tryAgain') {
          const program = data;

          const history = [
            PATHS.SCREEN_ENROLLMENT_START_REGISTER,
            PATHS.SCREEN_ENROLLMENT_LOCATION_SETUP,
            PATHS.SCREEN_ENROLLMENT_PROFILE_SETUP,
            PATHS.SCREEN_ENROLLMENT_FIND_PROGRAM,
          ];

          const steps = changeProgram(programs, program, fetchChangeProgram).screenStep;

          let find = false;
          steps.map((screen) => {
            if (!find) {
              history.push(TMP_PATHS[screen.name]);
            }

            if (screen.name === 'NAV_CONNECT_UTILITY_NORMAL') {
              find = true;
            }

            return screen;
          });

          history.map((screen) => navigate(screen));
        }
      }
    };

    if (window.ReactNativeWebView) {
      /** android */
      document.addEventListener('message', listener);

      /** ios */
      window.addEventListener('message', listener);
    } else {
      // 모바일이 아니라면 모바일 아님을 alert로 띄웁니다.
      // alert({ message: ERROR_TYPES.notMobile });
    }

    return () => {
      window.removeEventListener('message', listener, false);
    };
  }, []);

  return <p style={{ marginTop: 100 }}>{appLogin}</p>;
};

export default WelcomeContainer;
