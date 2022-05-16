import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import {
  resetAuthUrl,
  loginRequest,
  registerRequest,
  logoutRequest,
  userInfoRequest,
  updateUserInfoRequest,
  cleanOldStateData,
} from '@/stores/auth';
import { Language } from '@/types/setting';
import { GBCStatus } from '@/types/auth';

export default function useAccount() {
  const dispatch = useDispatch();

  const fetchResetAuthUrl = useCallback(() => dispatch(resetAuthUrl()), [dispatch]);

  const fetchLogin = useCallback((language: Language) => dispatch(loginRequest(language)), [dispatch]);

  // App에서는 사용하지 않음
  const fetchRegister = useCallback((language: Language) => dispatch(registerRequest(language)), [dispatch]);

  const fetchLogout = useCallback(
    (token: string, userId: string) => dispatch(logoutRequest(token, userId)),
    [dispatch],
  );

  const fetchUserInfo = useCallback(
    (callback: (gbcStatus: GBCStatus) => void) => dispatch(userInfoRequest(callback)),
    [dispatch],
  );

  const fetchUpdateUserInfo = useCallback(
    (userInfo: ReqUpdateUserInfo, callback?: () => void) => dispatch(updateUserInfoRequest(userInfo, callback)),
    [dispatch],
  );

  const cleanOldState = useCallback(() => dispatch(cleanOldStateData()), [dispatch]);

  return {
    fetchResetAuthUrl,
    fetchLogin,
    fetchRegister,
    fetchLogout,
    fetchUserInfo,
    fetchUpdateUserInfo,
    cleanOldState,
  };
}
