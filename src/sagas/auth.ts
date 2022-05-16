import { all, fork, take, put, call } from 'redux-saga/effects';
import * as apiAuth from '@/apis/auth';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
  USER_INFO_FAILURE,
  UPDATE_USER_INFO_REQUEST,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from '@/stores/auth';
import { RESET_MAIN } from '@/stores/main';
import { RESET_DASHBOARD } from '@/stores/dashboard';
import { RESET_USAGE_PATTERN } from '@/stores/usagePattern';
import { RESET_DR } from '@/stores/dr';
import { RESET_MESSAGES } from '@/stores/message';
import { CHANGE_LANGUAGE } from '@/stores/setting';
import { RESET_ENROLLMENT } from '@/stores/enrollment';
import { GBCStatus } from '@/types/auth';
import { Language } from '@/types/setting';
import { LOADED, LOADING } from '@/stores/loading';

function* login(language: Language) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(apiAuth.login, language);

    yield put({ type: RESET_ENROLLMENT });
    yield put({ type: LOGIN_SUCCESS, authUrl: data.authUrl });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, error });
  }
}

function* register(language: Language) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(apiAuth.register, language);

    yield put({ type: RESET_ENROLLMENT });
    yield put({ type: REGISTER_SUCCESS, authUrl: data.authUrl });
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, error });
  }
}

function* logout(token: string, userId: string) {
  try {
    yield put({ type: LOADING });

    const url = apiAuth.logout(token, userId);

    yield put({ type: RESET_ENROLLMENT });
    yield put({ type: RESET_MAIN });
    yield put({ type: RESET_DASHBOARD });
    yield put({ type: RESET_DR });
    yield put({ type: RESET_USAGE_PATTERN });
    yield put({ type: RESET_MESSAGES });
    yield put({ type: LOGOUT_SUCCESS });

    window.location.href = url;
  } catch (error) {
    yield put({ type: LOGOUT_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* userInfo(callback: (gbcStatus: GBCStatus) => void) {
  try {
    const { data } = yield call(apiAuth.userInfo);

    yield put({ type: USER_INFO_SUCCESS, userInfo: data });
    yield put({ type: CHANGE_LANGUAGE, language: data.language });

    callback(data.gbcStatus);
  } catch (error) {
    yield put({ type: USER_INFO_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* updateUserInfo(userInfo: ReqUpdateUserInfo, callback?: () => void) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(apiAuth.updateUserInfo, userInfo);

    const success = data === 'OK';
    if (success) {
      yield put({ type: UPDATE_USER_INFO_SUCCESS, userInfo });
    }

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put({ type: UPDATE_USER_INFO_FAILURE, error });

    if (callback) {
      callback();
    }
  } finally {
    yield put({ type: LOADED });
  }
}

export function* watchLogin() {
  while (true) {
    const { language } = yield take(LOGIN_REQUEST);
    yield fork(login, language);
  }
}

export function* watchRegister() {
  while (true) {
    const { language } = yield take(REGISTER_REQUEST);
    yield fork(register, language);
  }
}

export function* watchLogout() {
  while (true) {
    const { token, userId } = yield take(LOGOUT_REQUEST);
    yield fork(logout, token, userId);
  }
}

export function* watchUserInfo() {
  while (true) {
    const { callback } = yield take(USER_INFO_REQUEST);
    yield fork(userInfo, callback);
  }
}

export function* watchUpdateUserInfo() {
  while (true) {
    const { userInfo, callback } = yield take(UPDATE_USER_INFO_REQUEST);
    yield fork(updateUserInfo, userInfo, callback);
  }
}

export default function* authSaga() {
  yield all([fork(watchLogin), fork(watchRegister), fork(watchLogout), fork(watchUserInfo), fork(watchUpdateUserInfo)]);
}
