import { APP_ENV, GIT_TAG, GIT_COMMIT_HASH } from '@/constants/environment';

export const brandLife = (startYear: number | string) => {
  const target = typeof startYear === 'string' ? Number(startYear) : startYear;
  const compare = new Date().getFullYear();

  if (target > compare) {
    throw Error('브랜드 시작일이 비교일보다 크다');
  }

  return target === compare ? target.toString() : `${target} - ${compare}`;
};

export const appVersion = () => {
  const tag = GIT_TAG.split('-')[0];
  return `Last Tag : ${tag} \nLast Commit Hash : ${GIT_COMMIT_HASH.substring(0, 7)}`;
};

export const appEnv = () => {
  return `Environment : ${APP_ENV}\n${appVersion()}`;
};
