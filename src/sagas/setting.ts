import { take, put, call, all, fork, delay } from 'redux-saga/effects';
import * as apiEnrollment from '@/apis/enrollment';
import * as apiAuth from '@/apis/auth';
import { ReqSetting, ReqUpdateUserInfo } from '@/apis/auth/types';
import { ReqPhoneOtpRequest, ReqPhoneOtpVerification } from '@/apis/enrollment/types';
import { LOADED, LOADING } from '@/stores/loading';
import {
  SETTING_REQUEST,
  SETTING_SUCCESS,
  SETTING_FAILURE,
  CHANGE_PHONE_OTP_INTERVAL,
  CHANGE_PHONE_OTP,
  PHONE_OTP_REQUEST,
  PHONE_OTP_SUCCESS,
  PHONE_OTP_FAILURE,
  PHONE_OTP_VERIFICATION_REQUEST,
  PHONE_OTP_VERIFICATION_SUCCESS,
  PHONE_OTP_VERIFICATION_FAILURE,
  PHONE_OTP_RESEND_REQUEST,
  PHONE_OTP_RESEND_SUCCESS,
  PHONE_OTP_RESEND_FAILURE,
} from '@/stores/setting';
import { UPDATE_USER_INFO_SUCCESS } from '@/stores/auth';
import { OTPStatus } from '@/types/setting';

function* updateSetting(req: ReqSetting) {
  try {
    yield put({ type: LOADING });

    yield call(apiAuth.settings, req);
    // return value 'OK'

    yield put({ type: SETTING_SUCCESS, language: req.language, tempScale: req.tempScale });
  } catch (error) {
    yield put({ type: SETTING_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* changePhoneOtpInterval(status: OTPStatus) {
  yield put({ type: CHANGE_PHONE_OTP, status: OTPStatus.none });
  yield delay(1000);

  yield put({ type: CHANGE_PHONE_OTP, status });
}

function* phoneOtpRequest(payload: ReqPhoneOtpRequest) {
  try {
    yield put({ type: LOADING });

    yield call(apiEnrollment.postPhoneOtpRequest, payload);

    // return One Time Passcode sent to user via SMS

    yield put({ type: PHONE_OTP_SUCCESS });
  } catch (error) {
    yield put({ type: PHONE_OTP_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* phoneOtpVerification(phoneNumber: string, payload: ReqPhoneOtpVerification) {
  try {
    yield put({ type: LOADING });

    yield put({ type: CHANGE_PHONE_OTP, status: OTPStatus.none });

    const { data } = yield call(apiEnrollment.postPhoneOtpVerifycation, payload);
    yield delay(300);

    if (data.verified) {
      const userInfoPayload: ReqUpdateUserInfo = {
        phoneNumber,
      };

      const { data } = yield call(apiAuth.updateUserInfo, userInfoPayload);

      const success = data === 'OK';
      if (success) {
        yield put({ type: UPDATE_USER_INFO_SUCCESS, userInfo: { phoneNumber } });
        yield put({ type: PHONE_OTP_VERIFICATION_SUCCESS });
      } else {
        yield put({ type: PHONE_OTP_VERIFICATION_FAILURE });
      }
    } else {
      yield put({ type: PHONE_OTP_VERIFICATION_FAILURE });
    }
  } catch (error) {
    yield put({ type: PHONE_OTP_VERIFICATION_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* phoneOtpResend(payload: ReqPhoneOtpRequest) {
  try {
    yield put({ type: LOADING });

    yield put({ type: CHANGE_PHONE_OTP, status: OTPStatus.none });

    yield call(apiEnrollment.postPhoneOtpRequest, payload);
    yield delay(300);

    // return One Time Passcode sent to user via SMS

    yield put({ type: PHONE_OTP_RESEND_SUCCESS });
  } catch (error) {
    yield put({ type: PHONE_OTP_RESEND_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

export function* watchUpdateSetting() {
  while (true) {
    const { req } = yield take(SETTING_REQUEST);
    yield fork(updateSetting, req);
  }
}

export function* watchChangePhoneOtpInterval() {
  while (true) {
    const { status } = yield take(CHANGE_PHONE_OTP_INTERVAL);
    yield fork(changePhoneOtpInterval, status);
  }
}

export function* watchPhoneOtpRequest() {
  while (true) {
    const { payload } = yield take(PHONE_OTP_REQUEST);
    yield fork(phoneOtpRequest, payload);
  }
}

export function* watchPhoneOtpVerification() {
  while (true) {
    const { phoneNumber, payload } = yield take(PHONE_OTP_VERIFICATION_REQUEST);
    yield fork(phoneOtpVerification, phoneNumber, payload);
  }
}

export function* watchPhoneOtpResend() {
  while (true) {
    const { payload } = yield take(PHONE_OTP_RESEND_REQUEST);
    yield fork(phoneOtpResend, payload);
  }
}

export default function* settingSaga() {
  yield all([
    fork(watchUpdateSetting),
    fork(watchChangePhoneOtpInterval),
    fork(watchPhoneOtpRequest),
    fork(watchPhoneOtpVerification),
    fork(watchPhoneOtpResend),
  ]);
}
