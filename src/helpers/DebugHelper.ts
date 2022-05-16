/* eslint-disable @typescript-eslint/no-explicit-any */
const log = (type: 'Error' | 'Info', target: string, msg: any) => {
  if (process.env.APP_ENV === 'local') {
    console.log(`${type} - ${target}`, msg);
  }
};

export const printDebug = (target: string, msg: any = '') => {
  log('Info', target, msg);
};

export const printError = (target: string, msg: any) => {
  log('Error', target, msg);
};
