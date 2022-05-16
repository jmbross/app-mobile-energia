import { take, put, call, fork, all } from 'redux-saga/effects';
import * as api from '@/apis/primary';
import { ReqUsagePattern } from '@/apis/primary/types';
import {
  USAGE_PATTERN_REQUEST,
  USAGE_PATTERN_DAY_SUCCESS,
  USAGE_PATTERN_WEEK_SUCCESS,
  USAGE_PATTERN_MONTH_SUCCESS,
  USAGE_PATTERN_YEAR_SUCCESS,
  USAGE_PATTERN_FAILURE,
} from '@/stores/usagePattern';
import { TimePeriod, UsagePattern } from '@/types/usagePattern';
import { LOADED, LOADING } from '@/stores/loading';

function* usagePattern(req: ReqUsagePattern) {
  try {
    yield put({ type: LOADING });

    const { data } = yield call(api.getUsagePattern, req);

    let usagePattern: UsagePattern = {
      timeList: [],
      selectedTimePeriod: data.timeList.selectedTimePeriod as TimePeriod,
      graph: data.graph,
      highestValue: data.highestValue,
      lowestValue: data.lowestValue,
      highestPeriod: data.highestPeriod,
      lowestPeriod: data.lowestPeriod,
      highestPeriodTimestamp: data.highestPeriodTimestamp,
      lowestPeriodTimestamp: data.lowestPeriodTimestamp,
      hasSufficientUsageData: data.hasSufficientUsageData,
      range: 'initial',
    };

    let type = '';
    switch (req.timePeriod) {
      case TimePeriod.day:
        type = USAGE_PATTERN_DAY_SUCCESS;
        usagePattern = {
          ...usagePattern,
          timeList: data.timeList.dayList,
          range: req.range === 'initial' ? data.timeList.dayList[0] : req.range,
        };
        break;

      case TimePeriod.week:
        type = USAGE_PATTERN_WEEK_SUCCESS;
        usagePattern = {
          ...usagePattern,
          timeList: data.timeList.weekList,
          range: req.range === 'initial' ? data.timeList.weekList[0] : req.range,
        };
        break;

      case TimePeriod.month:
        type = USAGE_PATTERN_MONTH_SUCCESS;
        usagePattern = {
          ...usagePattern,
          timeList: data.timeList.monthList,
          range: req.range === 'initial' ? data.timeList.monthList[0] : req.range,
        };
        break;

      case TimePeriod.year:
      default:
        type = USAGE_PATTERN_YEAR_SUCCESS;
        usagePattern = {
          ...usagePattern,
          timeList: data.timeList.yearList,
          range: req.range === 'initial' ? data.timeList.yearList[0] : req.range,
        };
        break;
    }

    yield put({ type, usagePattern });
  } catch (error) {
    yield put({ type: USAGE_PATTERN_FAILURE, error });
  } finally {
    yield put({ type: LOADED });
  }
}

export function* watchUsagePattern() {
  while (true) {
    const { req } = yield take(USAGE_PATTERN_REQUEST);
    yield fork(usagePattern, req);
  }
}

export default function* settingSaga() {
  yield all([fork(watchUsagePattern)]);
}
