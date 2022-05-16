import { take, put, fork, all, call, delay } from 'redux-saga/effects';
import * as apiAuth from '@/apis/auth';
import * as apiPrimary from '@/apis/primary';
import {
  SITES_REQUEST,
  SITES_SUCCESS,
  SITES_FAILURE,
  CHANGE_SITE_REQUEST,
  CHANGE_SITE_SUCCESS,
  CHANGE_SITE_FAILURE,
  UPDATE_SITE_REQUEST,
  UPDATE_SITE_SUCCESS,
  UPDATE_SITE_FAILURE,
  DELETE_SITE_REQUEST,
  DELETE_SITE_SUCCESS,
  DELETE_SITE_FAILURE,
} from '@/stores/main';
import { LOADED, LOADING } from '@/stores/loading';
import { SiteItem } from '@/types/main';

function* sites(siteName: string) {
  try {
    const { data } = yield call(apiPrimary.getSites);

    const currentSite = data.sites.find(({ name }: SiteItem) => name === siteName);

    yield put({ type: SITES_SUCCESS, sites: data, currentSite });
  } catch (error) {
    yield put({ type: SITES_FAILURE, error });
  }
}

function* changeSite(siteId: string) {
  try {
    const { data: siteData } = yield call(apiPrimary.selectSite, siteId);

    const { data } = yield call(apiAuth.updateUserInfo, { siteName: siteData.name });
    const success = data === 'OK';
    if (success) {
      yield put({ type: CHANGE_SITE_SUCCESS, currentSite: siteData });
    }
  } catch (error) {
    yield put({ type: CHANGE_SITE_FAILURE, error });
  }
}

function* updateSite(siteId: string, payload: { [k: string]: string }) {
  try {
    yield put({ type: LOADING });

    yield call(apiPrimary.updateSite, siteId, payload);

    yield put({ type: UPDATE_SITE_SUCCESS, siteId, payload });
  } catch (error) {
    yield put({ type: UPDATE_SITE_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

function* deleteSite(siteId: string) {
  try {
    yield call(apiPrimary.deleteSite, siteId);

    yield put({ type: DELETE_SITE_SUCCESS, siteId });

    delay(100);

    yield fork(sites);
  } catch (error) {
    yield put({ type: DELETE_SITE_FAILURE, error });
  }
}

export function* watchSites() {
  while (true) {
    const { siteName } = yield take(SITES_REQUEST);
    yield fork(sites, siteName);
  }
}

export function* watchChangeSite() {
  while (true) {
    const { siteId } = yield take(CHANGE_SITE_REQUEST);
    yield fork(changeSite, siteId);
  }
}

export function* watchUpdateSite() {
  while (true) {
    const { siteId, payload } = yield take(UPDATE_SITE_REQUEST);
    yield fork(updateSite, siteId, payload);
  }
}

export function* watchDeleteSite() {
  while (true) {
    const { siteId } = yield take(DELETE_SITE_REQUEST);
    yield fork(deleteSite, siteId);
  }
}

export default function* settingSaga() {
  yield all([fork(watchSites), fork(watchChangeSite), fork(watchUpdateSite), fork(watchDeleteSite)]);
}
