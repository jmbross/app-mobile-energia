import { take, put, call, fork, all } from 'redux-saga/effects';
import * as apiPrimary from '@/apis/primary';
import {
  DR_REQUEST,
  DR_SUCCESS,
  DR_FAILURE,
  EVENT_PARTICIPATE_REQUEST,
  EVENT_PARTICIPATE_SUCCESS,
  EVENT_PARTICIPATE_FAILURE,
  EVENTS_REQUEST,
  EVENTS_SUCCESS,
  EVENTS_FAILURE,
  EVENT_SELECT_REQUEST,
  EVENT_SELECT_SUCCESS,
  EVENT_SELECT_FAILURE,
  EARNINGS_REQUEST,
  EARNINGS_SUCCESS,
  EARNINGS_FAILURE,
  EARNING_SELECT_REQUEST,
  EARNING_SELECT_SUCCESS,
  EARNING_SELECT_FAILURE,
} from '@/stores/dr';
import { ReqEventParticipate, resDR } from '@/apis/primary/types';
import { DrHistoryItem, MoneyEarnedItem } from '@/types/dr';
import { LOADED, LOADING } from '@/stores/loading';

function* dr(siteId: string) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(apiPrimary.getDr, { siteId });

    const dr: resDR = data;

    yield put({ type: DR_SUCCESS, dr });
  } catch (error) {
    yield put({ type: DR_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* eventParticipate(siteId: string, payload: ReqEventParticipate) {
  try {
    yield put({ type: LOADING });

    yield call(apiPrimary.postDrEventParticipate, siteId, payload);
    // return value : 'Response to DR request successfully recorded in db'

    yield put({ type: EVENT_PARTICIPATE_SUCCESS, userEventId: payload.userEventId, userStatus: payload.userStatus });
  } catch (error) {
    yield put({ type: EVENT_PARTICIPATE_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

// TODO: events만 가져오는 API는 없다.
function* events() {
  try {
    yield put({ type: LOADING });

    yield put({ type: EVENTS_SUCCESS });
  } catch (error) {
    yield put({ type: EVENTS_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* eventSelect(siteId: string, event: DrHistoryItem) {
  try {
    const { data } = yield call(apiPrimary.getDrEvent, siteId, event?.eventId);

    yield put({ type: EVENT_SELECT_SUCCESS, event: data });
  } catch (error) {
    yield put({ type: EVENT_SELECT_FAILURE, error });
  }
}

function* earnings(siteId: string) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(apiPrimary.getDrEarnings, { siteId });

    yield put({ type: EARNINGS_SUCCESS, earnings: data });
  } catch (error) {
    yield put({ type: EARNINGS_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* earningSelect(siteId: string, earnings: MoneyEarnedItem) {
  try {
    if (earnings.eventId !== '') {
      const { data } = yield call(apiPrimary.getDrEvent, siteId, earnings.eventId);

      yield put({ type: EARNING_SELECT_SUCCESS, earnings, event: data });
    } else {
      yield put({ type: EARNING_SELECT_SUCCESS, earnings });
    }
  } catch (error) {
    yield put({ type: EARNING_SELECT_FAILURE, error });
  }
}

export function* watchDr() {
  while (true) {
    const { siteId } = yield take(DR_REQUEST);
    yield fork(dr, siteId);
  }
}

export function* watchEvents() {
  while (true) {
    yield take(EVENTS_REQUEST);
    yield fork(events);
  }
}

export function* watchEventParticipate() {
  while (true) {
    const { siteId, payload } = yield take(EVENT_PARTICIPATE_REQUEST);
    yield fork(eventParticipate, siteId, payload);
  }
}

export function* watchEventSelect() {
  while (true) {
    const { siteId, event } = yield take(EVENT_SELECT_REQUEST);
    yield fork(eventSelect, siteId, event);
  }
}

export function* watchEarnings() {
  while (true) {
    const { siteId } = yield take(EARNINGS_REQUEST);
    yield fork(earnings, siteId);
  }
}

export function* watchEarningSelect() {
  while (true) {
    const { siteId, earnings } = yield take(EARNING_SELECT_REQUEST);
    yield fork(earningSelect, siteId, earnings);
  }
}

export default function* drSaga() {
  yield all([
    fork(watchDr),
    fork(watchEvents),
    fork(watchEventParticipate),
    fork(watchEventSelect),
    fork(watchEarnings),
    fork(watchEarningSelect),
  ]);
}
