import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReqIntegrations } from '@/apis/enrollment/types';
import { RootState } from '@/stores/index';
import { moveChangeScreen } from '@/helpers/NavigationHelper';
import useEnrollment from '@/hooks/useEnrollment';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import { useAccount } from '@/hooks/index';
import { GBCStatus } from '@/types/auth';
import PATHS from '@/types/navigationPaths';
import ConnectToUtilityScreenView from './index.view';

const ConnectToUtilityScreenContainer = () => {
  const {
    enrollment: {
      enrollmentInfo,
      programs,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ disabledNext: true, later: false });
  const [modal, setModal] = useState({ error: { show: false, content: '' } });

  const location = useLocation();
  const navigate = useNavigate();
  const { fetchUpdateUserInfo } = useAccount();
  const { fetchChangeProgram, fetchGBC, fetchGBCResult } = useEnrollment();

  useEffect(() => {
    // Utility 페이지에서 리턴되었을 때
    if (window.location.search) {
      fetchGBCResult(window.location.search);

      // // // TODO: 이동시간이 오래 걸린다.
      // // setTimeout(() => {
      // //   // TODO: HardCoding
      // //   // 뒤로가면 utility 사이트로 이동하기 때문에 그 이전 화면으로 강제 이동한다.
      // //   let back = 0;
      // //   if (enrollmentInfo.utility === 'PGE') {
      // //     back = -5;
      // //   } else if (enrollmentInfo.utility === 'SCE') {
      // //     back = -2;
      // //   }
      // //   navigate(back);
      // }, 1000);
    }
  }, []);

  useEffect(() => {
    if (
      location.pathname === PATHS.SCREEN_ENROLLMENT_CONNECT_TO_UTILITY &&
      // location.search === '' &&
      enrollmentInfo.gbcUrlResult !== ''
    ) {
      utilityConfirmAccount();
    }
  }, [enrollmentInfo.gbcUrlResult]);

  useEffect(() => {
    validationCheck();
  }, [enrollmentInfo]);

  const utilityConfirmAccount = () => {
    if (enrollmentInfo.gbcUrlResult === '') {
      return;
    }

    const urlSearchParams = new URLSearchParams(enrollmentInfo.gbcUrlResult);
    const code = urlSearchParams.get('code');
    const error = urlSearchParams.get('error');

    if (code === 'success') {
      const nextScreen = moveChangeScreen(programs, currentProgram.program, fetchChangeProgram, 2);
      navigate(nextScreen);
    }

    if (error) {
      const errorContent = error.replace(/[-|+]/g, ' ');
      setModal({ ...modal, error: { show: true, content: errorContent } });
    }
  };

  const validationCheck = () => {
    if (enrollmentInfo.utility !== '') {
      setState({ ...state, disabledNext: false });
    }
  };

  const handleNext = () => {
    const payload: ReqIntegrations = {
      program: currentProgram.program,
      provider: enrollmentInfo.utility,
    };

    fetchGBC(payload, (url: string) => {
      window.location.href = url;
    });
  };

  const handleNoThanks = () => {
    const payload: ReqUpdateUserInfo = {
      gbcStatus: GBCStatus.incomplete,
    };

    fetchUpdateUserInfo(payload, () => {
      navigate(PATHS.SCREEN_DASHBOARD);
    });
  };

  const handleConnectToUtilityErrorOK = () => {
    // 로그인 페이지 이동 후에 나타나는 경우
    // setState({ ...state, later: true });
    setModal({ ...modal, error: { show: false, content: '' } });

    fetchGBCResult('');
  };

  return (
    <ConnectToUtilityScreenView
      enrollmentProgram={currentProgram}
      disabledNext={state.disabledNext}
      later={enrollmentInfo.gbcUrl !== ''} // {state.later}
      onNext={handleNext}
      onNoThanks={handleNoThanks}
      modalConnectToUtilityError={modal.error.show}
      modalConnectToUtilityErrorTitle={modal.error.content}
      modalConnectToUtilityErrorOK={handleConnectToUtilityErrorOK}
    />
  );
};

export default ConnectToUtilityScreenContainer;
