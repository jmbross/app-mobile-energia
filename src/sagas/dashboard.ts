import { take, put, call, fork, all } from 'redux-saga/effects';
import * as apiPrimary from '@/apis/primary';
import { DASHBOARD_REQUEST, DASHBOARD_SUCCESS, DASHBOARD_FAILURE } from '@/stores/dashboard';
import { LOADED, LOADING } from '@/stores/loading';

function* dashboard(siteId: string) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(apiPrimary.getDashboard, { siteId });

    yield put({ type: DASHBOARD_SUCCESS, dashboard: data });
  } catch (error) {
    yield put({ type: DASHBOARD_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

export function* watchDashboard() {
  while (true) {
    const { siteId } = yield take(DASHBOARD_REQUEST);
    yield fork(dashboard, siteId);
  }
}

export default function* settingSaga() {
  yield all([fork(watchDashboard)]);
}
