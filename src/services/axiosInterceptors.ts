import axios from 'axios';
import { getLocalToken, removeLocalToken, setLocalToken } from '@/services/token';
import { OLIVINE_AUTH_HOST } from '@/constants/environment';

export const axiosApiRefreshToken = axios.create({
  baseURL: OLIVINE_AUTH_HOST,
  withCredentials: false,
});

axiosApiRefreshToken.interceptors.request.use(
  async (config) => {
    const accessTokenByCookies = getLocalToken();

    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: `Bearer ${accessTokenByCookies}`,
      Accept: 'application/json',
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

export const interceptor = () => {
  axios.interceptors.request.use(
    async (config) => {
      const accessTokenByCookies = getLocalToken();

      // eslint-disable-next-line no-param-reassign
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessTokenByCookies}`,
        'App-Version': '1.4.0', // TODO: 서버를 업데이트하면 삭제하자
      };

      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const originalConfig = err.config;
      const accessTokenByCookies = getLocalToken();

      if (err.response.status === 401) {
        if (originalConfig.url === '/oauth2/refresh') {
          console.log('Prevent infinite loops');
          return Promise.reject(err);
        }

        try {
          if (accessTokenByCookies) {
            const { data } = await axiosApiRefreshToken.post(`${OLIVINE_AUTH_HOST}/oauth2/refresh`);
            setLocalToken(data.oidcAccessToken);

            return axios(originalConfig);
          }

          removeLocalToken();
        } catch (err) {
          console.log(err);
        }
      }

      return Promise.reject(err);
    },
  );
};
