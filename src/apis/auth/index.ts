import axios from 'axios';
import api from '@/apis/api';
import { ReqSetting, ReqUpdateUserInfo } from '@/apis/auth/types';
import { OLIVINE_ACCOUNT_URI, OLIVINE_AUTH_HOST } from '@/constants/environment';

export const refreshToken = (token: string) => {
  const url = `${OLIVINE_AUTH_HOST}/oauth2/refresh`;

  return axios
    .create({
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
      timeout: 1000,
      withCredentials: false,
      responseType: 'json',
    })
    .post(url);
};

export const login = (language: string) => {
  const url = `${OLIVINE_AUTH_HOST}/oauth2/login?ui_locales=${language}`;

  return api.get({ url });
};

export const register = (language: string) => {
  const url = `${OLIVINE_AUTH_HOST}/oauth2/register?ui_locales=${language}`;

  return api.get({ url });
};

export const logout = (token: string, userId: string) => {
  return `${OLIVINE_ACCOUNT_URI}/connect/endsession?id_token_hint=${token}&state=${userId}&post_logout_redirect_uri=${OLIVINE_AUTH_HOST}/oauth2/logout`;
};

export const userInfo = () => {
  const url = `${OLIVINE_AUTH_HOST}/users/user`;

  return api.get({ url });
};

export const updateUserInfo = (payload: ReqUpdateUserInfo) => {
  const url = `${OLIVINE_AUTH_HOST}/users/profile`;

  return api.patch({ url, payload });
};

export const settings = (payload: ReqSetting) => {
  const url = `${OLIVINE_AUTH_HOST}/users/settings`;

  return api.patch({ url, payload });
};
