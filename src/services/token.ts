import cookie from 'react-cookies';

export const setLocalToken = (accessToken: string) => {
  cookie.save('accessToken', accessToken, {
    path: '/',
    secure: process.env.APP_ENV !== 'local',
  });
};

export const getLocalToken = () => {
  return cookie.load('accessToken');
};

export const removeLocalToken = () => {
  cookie.remove('accessToken', { path: '/' });
};
