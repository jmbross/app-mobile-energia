import { take, put, call, fork, all } from 'redux-saga/effects';
import * as api from '@/apis/enrollment';
import * as apiPrimary from '@/apis/primary';
import {
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  GBC_REQUEST,
  GBC_SUCCESS,
  GBC_FAILURE,
  SURVEY_REQUEST,
  SURVEY_SUCCESS,
  SURVEY_FAILURE,
  PROGRAM_REQUEST,
  PROGRAM_SUCCESS,
  PROGRAM_FAILURE,
  RECENT_REQUEST,
  RECENT_SUCCESS,
  RECENT_FAILURE,
  RESET_PROGRAM,
} from '@/stores/enrollment';
import { Program, UtilityPrograms } from '@/types/enrollment';
import { ReqIntegrations, ReqSurveyAnswer, ReqVerify } from '@/apis/enrollment/types';
import { LOADED, LOADING } from '@/stores/loading';

function* verify(payload: ReqVerify, success: () => void, failure: () => void) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(api.postVerify, payload);

    yield put({ type: VERIFY_SUCCESS, areAllServiceAccountsAuthorized: data.areAllServiceAccountsAuthorized });

    const { status } = data;

    if (status === 'active_customer') {
      success();
    } else {
      failure();
    }
  } catch (error) {
    yield put({ type: VERIFY_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* gbc(payload: ReqIntegrations, success: (url: string) => void) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(api.postIntegrations, payload);
    const { loginUrl } = data;

    success(loginUrl);

    yield put({ type: GBC_SUCCESS, gbcUrl: loginUrl });
  } catch (error) {
    yield put({ type: GBC_FAILURE, error });
  }
}

function* survey(payload: ReqSurveyAnswer[], callback: (success: boolean) => void) {
  try {
    yield call(api.postSurvey, payload);

    callback(true);
    yield put({ type: SURVEY_SUCCESS });
  } catch (error) {
    yield put({ type: SURVEY_FAILURE, error });
  }
}

function* recentRequest() {
  try {
    const { data } = yield call(api.recent);

    yield put({ type: RECENT_SUCCESS, recent: data });
  } catch (error) {
    yield put({ type: RECENT_FAILURE, error });
  }
}

export function* watchVerify() {
  while (true) {
    const { payload, success, failure } = yield take(VERIFY_REQUEST);
    yield fork(verify, payload, success, failure);
  }
}

export function* watchGbc() {
  while (true) {
    const { payload, success } = yield take(GBC_REQUEST);
    yield fork(gbc, payload, success);
  }
}

export function* watchSurvey() {
  while (true) {
    const { payload, callback } = yield take(SURVEY_REQUEST);
    yield fork(survey, payload, callback);
  }
}

function* programRequest(zipCode?: string, callback?: (utilityPrograms: UtilityPrograms) => void) {
  try {
    const { data } = yield call(apiPrimary.programs, zipCode);
    const utilityPrograms = data.data;
    yield put({ type: PROGRAM_SUCCESS, utilityPrograms });
    if (callback) {
      callback(utilityPrograms);
    }
  } catch (error) {
    yield put({ type: PROGRAM_FAILURE, error });
  }
}

function* programReset(program: Program, callback: () => void) {
  yield put({ type: RESET_PROGRAM, program });

  callback();
}

export function* watchProgramRequest() {
  while (true) {
    const { zipCode, callback } = yield take(PROGRAM_REQUEST);
    yield fork(programRequest, zipCode, callback);
  }
}

export function* watchResetProgram() {
  while (true) {
    const { currentProgram, callback } = yield take('PROGRAMS/RESET_PROGRAM_REQUEST');
    yield fork(programReset, currentProgram, callback);
  }
}

export function* watchRecentRequest() {
  while (true) {
    yield take(RECENT_REQUEST);
    yield fork(recentRequest);
  }
}

export default function* enrollmentSaga() {
  yield all([
    fork(watchProgramRequest),
    fork(watchResetProgram),
    fork(watchVerify),
    fork(watchGbc),
    fork(watchSurvey),
    fork(watchRecentRequest),
  ]);
}
