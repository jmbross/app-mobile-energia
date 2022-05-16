import { take, put, call, fork, all } from 'redux-saga/effects';
import * as apiPrimary from '@/apis/primary';
import { MESSAGES_REQUEST, MESSAGES_SUCCESS, MESSAGES_FAILURE } from '@/stores/message';
import { LOADED, LOADING } from '@/stores/loading';

function* message() {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(apiPrimary.getMessages);

    const { messages } = data;

    yield put({ type: MESSAGES_SUCCESS, messages });
  } catch (error) {
    yield put({ type: MESSAGES_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

export function* watchMessage() {
  while (true) {
    yield take(MESSAGES_REQUEST);
    yield fork(message);
  }
}

export default function* settingSaga() {
  yield all([fork(watchMessage)]);
}
