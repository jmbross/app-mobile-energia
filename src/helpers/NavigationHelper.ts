import { Programs, Program, Screen } from '@/types/enrollment';

export const TMP_PATHS: { [k: string]: string } = {
  ROOT: '/',
  REDIRECT: '/redirect',
  NAV_AUTH_GUIDE_START: '/enrollment/start',
  NAV_PROFILE_SETUP: '/enrollment/profile',
  SCREEN_ENROLLMENT_PHONE_SMS: '/enrollment/phonesms',
  SCREEN_ENROLLMENT_PHONE_OTP: '/enrollment/phoneotp',
  NAV_LOCATION_SETUP: '/enrollment/location',
  NAV_AUTH_GUIDE_FIND: '/enrollment/findProgram',
  NAV_CPA_VERIFY: '/enrollment/verification',
  NAV_CPA_NOT_VERIFIED: '/enrollment/notVerified',
  NAV_AVAILABLE_PROGRAM_NORMAL: '/enrollment/availableProgram',
  NAV_CPA_VOICEPHONE: '/enrollment/cpaphone',
  NAV_CPA_PROGRAM_LIST: '/enrollment/cpaprogramList',
  NAV_CONNECT_UTILITY_NORMAL: '/enrollment/connectToUtility',
  NAV_CPA_SURVEY: '/enrollment/survey/multiple',
  NAV_CPA_HEAR: '/enrollment/survey/multiple',
  NAV_FRESNO_HEAR: '/enrollment/survey/single',
  NAV_WEB_STORE: '/enrollment/webStore',
  NAV_DASHBOARD: '/main/dashboard',
};

const findProgram = (programs: Programs, programName: string) => {
  return programs.availablePrograms.filter((_program) => _program.program === programName)[0];
};

const findScreen = (screens: Screen[]) => {
  const routeName = findRouteName(window.location);

  return screens.filter((screen) => screen.name === routeName)[0];
};

export const findRouteName = (location: Location) => {
  return Object.keys(TMP_PATHS).find((key) => TMP_PATHS[key] === location.pathname);
};

const nextScreenStep = (screens: Screen[], location: Location, step = 1) => {
  const routeName = findRouteName(location);

  const index = screens.findIndex((screen) => screen.name === routeName) + step;
  const changeScreen = screens.find((screen, _index) => _index === index);

  return TMP_PATHS[changeScreen.name];
};

export const isNoThanks = (screens: Screen[]) => {
  const curScreen = findScreen(screens);

  return !!curScreen.noThanks;
};

export const changeProgram = (
  programs: Programs,
  programName: string,
  fetchChangeProgram: (program: Program) => void,
) => {
  const currentProgram = findProgram(programs, programName);

  fetchChangeProgram(currentProgram);

  return currentProgram;
};

export const moveChangeScreen = (
  programs: Programs,
  programName: string,
  fetchChangeProgram: (program: Program) => void,
  step = 1,
) => {
  const changeScreenStep = changeProgram(programs, programName, fetchChangeProgram).screenStep;

  return nextScreenStep(changeScreenStep, window.location, step);
};

export const moveNoThanksScreen = (
  screens: Screen[],
  programs: Programs,
  fetchChangeProgram: (program: Program) => void,
) => {
  const curScreen = findScreen(screens);

  const changeScreen = changeProgram(programs, curScreen.noThanks, fetchChangeProgram).screenStep[0];

  return TMP_PATHS[changeScreen.name];
};
