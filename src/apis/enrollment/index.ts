import api from '@/apis/api';
import { OLIVINE_AUTH_HOST, GB_INTERFACE_HOST } from '@/constants/environment';
import { SurveyAnswer } from '@/types/enrollment';
import { ReqIntegrations, ReqVerify, ReqPhoneOtpVerification, ReqPhoneOtpRequest } from './types';

export const postIntegrations = (payload: ReqIntegrations) => {
  const url = `${GB_INTERFACE_HOST}/integrations`;

  return api.post({ url, payload });
};

export const postVerify = (payload: ReqVerify) => {
  const url = `${GB_INTERFACE_HOST}/olivine/verify`;

  return api.post({ url, payload });
};

export const postSurvey = (payload: SurveyAnswer[]) => {
  const url = `${OLIVINE_AUTH_HOST}/users/survey`;

  return api.post({ url, payload });
};

export const recent = () => {
  const url = `${GB_INTERFACE_HOST}/redirects/recent`;

  return api.get({ url });
};

export const postPhoneOtpRequest = (payload: ReqPhoneOtpRequest) => {
  const url = `${GB_INTERFACE_HOST}/olivine/otprequest`;

  return api.post({ url, payload });
};

export const postPhoneOtpVerifycation = (payload: ReqPhoneOtpVerification) => {
  const url = `${GB_INTERFACE_HOST}/olivine/otpverify`;

  return api.post({ url, payload });
};
