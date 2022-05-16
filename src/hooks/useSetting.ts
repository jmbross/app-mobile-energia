import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { ReqSetting } from '@/apis/auth/types';
import { ReqPhoneOtpRequest, ReqPhoneOtpVerification } from '@/apis/enrollment/types';
import { Language, OTPStatus } from '@/types/setting';
import {
  changeLanguage,
  settingRequest,
  changePhoneOtpInterval,
  changePhoneOtp,
  phoneOtpRequest,
  phoneOtpVerification,
  phoneOtpResend,
} from '@/stores/setting';

export default function useSetting() {
  const dispatch = useDispatch();

  const fetchLanguage = useCallback((language: Language) => dispatch(changeLanguage(language)), [dispatch]);

  const fetchSetting = useCallback((req: ReqSetting) => dispatch(settingRequest(req)), [dispatch]);

  const fetchChangePhoneOtpInterval = useCallback(
    (status: OTPStatus) => dispatch(changePhoneOtpInterval(status)),
    [dispatch],
  );

  const fetchChangePhoneOtp = useCallback((status: OTPStatus) => dispatch(changePhoneOtp(status)), [dispatch]);

  const fetchPhoneOtpRequest = useCallback(
    (payload: ReqPhoneOtpRequest) => {
      dispatch(phoneOtpRequest(payload));
    },
    [dispatch],
  );

  const fetchPhoneOtpVerification = useCallback(
    (phoneNumber: string, payload: ReqPhoneOtpVerification) => {
      dispatch(phoneOtpVerification(phoneNumber, payload));
    },
    [dispatch],
  );

  const fetchPhoneOtpResend = useCallback(
    (payload: ReqPhoneOtpRequest) => {
      dispatch(phoneOtpResend(payload));
    },
    [dispatch],
  );

  return {
    fetchLanguage,
    fetchSetting,
    fetchChangePhoneOtpInterval,
    fetchChangePhoneOtp,
    fetchPhoneOtpRequest,
    fetchPhoneOtpVerification,
    fetchPhoneOtpResend,
  };
}
