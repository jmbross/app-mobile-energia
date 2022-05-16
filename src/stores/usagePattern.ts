import { ReqUsagePattern } from '@/apis/primary/types';
import { TimePeriod, UsagePattern } from '@/types/usagePattern';

// Types
//
// Reset
export const RESET_USAGE_PATTERN = 'usagePattern/REESET_USAGE_PATTERN';

// Request All Data
export const USAGE_PATTERN_REQUEST = 'usagePattern/USAGE_PATTERN_REQUEST';
export const USAGE_PATTERN_DAY_SUCCESS = 'usagePattern/USAGE_PATTERN_DAY_SUCCESS';
export const USAGE_PATTERN_WEEK_SUCCESS = 'usagePattern/USAGE_PATTERN_WEEK_SUCCESS';
export const USAGE_PATTERN_MONTH_SUCCESS = 'usagePattern/USAGE_PATTERN_MONTH_SUCCESS';
export const USAGE_PATTERN_YEAR_SUCCESS = 'usagePattern/USAGE_PATTERN_YEAR_SUCCESS';
export const USAGE_PATTERN_FAILURE = 'usagePattern/USAGE_PATTERN_FAILURE';

// Select Period
export const CHANGE_USAGE_PATTERN_PERIOD = 'usagePattern/CHANGE_USAGE_PATTERN_PERIOD';

interface ResetUsagePatternAction {
  type: typeof RESET_USAGE_PATTERN;
}

interface UsagePatternRequestAction {
  type: typeof USAGE_PATTERN_REQUEST;
  req: ReqUsagePattern;
}

interface UsagePatternDaySuccessAction {
  type: typeof USAGE_PATTERN_DAY_SUCCESS;
  usagePattern: UsagePattern;
}

interface UsagePatternWeekSuccessAction {
  type: typeof USAGE_PATTERN_WEEK_SUCCESS;
  usagePattern: UsagePattern;
}

interface UsagePatternMonthSuccessAction {
  type: typeof USAGE_PATTERN_MONTH_SUCCESS;
  usagePattern: UsagePattern;
}

interface UsagePatternYearSuccessAction {
  type: typeof USAGE_PATTERN_YEAR_SUCCESS;
  usagePattern: UsagePattern;
}

interface UsagePatternFailureAction {
  type: typeof USAGE_PATTERN_FAILURE;
}

interface ChangeUsagePatternAction {
  type: typeof CHANGE_USAGE_PATTERN_PERIOD;
  period: TimePeriod;
}

type InitActionTypes =
  | ResetUsagePatternAction
  | UsagePatternRequestAction
  | UsagePatternDaySuccessAction
  | UsagePatternWeekSuccessAction
  | UsagePatternMonthSuccessAction
  | UsagePatternYearSuccessAction
  | UsagePatternFailureAction
  | ChangeUsagePatternAction;

// initial state
//
const initialDate = (period: TimePeriod): UsagePattern => {
  let length = 0;
  switch (period) {
    case TimePeriod.day:
      length = 24;
      break;

    case TimePeriod.week:
      length = 7;
      break;

    case TimePeriod.month:
      length = 31;
      break;

    case TimePeriod.year:
    default:
      length = 12;
      break;
  }

  return {
    timeList: [],
    selectedTimePeriod: period,
    graph: Array.from({ length }),
    highestValue: 0,
    lowestValue: 0,
    highestPeriod: '',
    lowestPeriod: '',
    highestPeriodTimestamp: '',
    lowestPeriodTimestamp: '',
    hasSufficientUsageData: false,
    range: 'initial',
  };
};

export interface UsagePatternState {
  // Day
  dayList: UsagePattern;

  // Week
  weekList: UsagePattern;

  // Month
  monthList: UsagePattern;

  // Year
  yearList: UsagePattern;

  // Current Period
  usagePatternPeriod: TimePeriod;
}

const initialState: UsagePatternState = {
  dayList: initialDate(TimePeriod.day),
  weekList: initialDate(TimePeriod.week),
  monthList: initialDate(TimePeriod.month),
  yearList: initialDate(TimePeriod.year),
  usagePatternPeriod: TimePeriod.day,
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: UsagePatternState = initialState, action: InitActionTypes): UsagePatternState => {
  switch (action.type) {
    case RESET_USAGE_PATTERN:
      return {
        ...initialState,
      };

    case USAGE_PATTERN_DAY_SUCCESS:
      return {
        ...state,
        dayList: action.usagePattern,
      };

    case USAGE_PATTERN_WEEK_SUCCESS:
      return {
        ...state,
        weekList: action.usagePattern,
      };

    case USAGE_PATTERN_MONTH_SUCCESS:
      return {
        ...state,
        monthList: action.usagePattern,
      };

    case USAGE_PATTERN_YEAR_SUCCESS:
      return {
        ...state,
        yearList: action.usagePattern,
      };

    case USAGE_PATTERN_FAILURE:
      return {
        ...state,
      };

    case CHANGE_USAGE_PATTERN_PERIOD:
      return {
        ...state,
        usagePatternPeriod: action.period,
      };

    default:
      return state;
  }
};

// Actions
//
export const usagePatternRequest = (req: ReqUsagePattern) => ({
  type: USAGE_PATTERN_REQUEST,
  req,
});

export const changeUsagePattern = (period: TimePeriod) => ({ type: CHANGE_USAGE_PATTERN_PERIOD, period });
