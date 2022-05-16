import {
  Achievement,
  AchievementLevel,
  Dashboard,
  EnergyHistory,
  EnvironmentalImpact,
  GridEmissions,
  Reminder,
} from '@/types/dashboard';

// Types
//
// Reset
export const RESET_DASHBOARD = 'dashboard/RESET_DASHBOARD';

// Request All Data
export const DASHBOARD_REQUEST = 'dashboard/DASHBOARD_REQUEST';
export const DASHBOARD_SUCCESS = 'dashboard/DASHBOARD_SUCCESS';
export const DASHBOARD_FAILURE = 'dashboard/DASHBOARD_FAILURE';

interface ResetDashboardAction {
  type: typeof RESET_DASHBOARD;
}

interface DashboardRequestAction {
  type: typeof DASHBOARD_REQUEST;
  siteId: string;
}

interface DashboardSuccessAction {
  type: typeof DASHBOARD_SUCCESS;
  dashboard: Dashboard;
}

interface DashboardFailureAction {
  type: typeof DASHBOARD_FAILURE;
}

type InitActionTypes = ResetDashboardAction | DashboardRequestAction | DashboardSuccessAction | DashboardFailureAction;

// initial state
//
export interface DashboardState {
  // Recent Energy History
  history: EnergyHistory;

  // Achievement
  achievement: Achievement;

  // Environmental Impact
  impact: EnvironmentalImpact;

  // Grid Emissions
  gridEmissions: GridEmissions;

  // Reminders
  reminder: Reminder;
}

const initialState: DashboardState = {
  history: {
    weekdayAvg: 0,
    lastWeekHigh: 0,
    lastWeekLow: 0,
    lastWeekHighDay: '',
    lastWeekLowDay: '',
    lastWeekHighDayTimestamp: '',
    lastWeekLowDayTimestamp: '',
    lastWeekGraph: [0, 0, 0, 0, 0, 0, 0],
    thisWeekGraph: [0, 0, 0, 0, 0, 0, 0],
    lastWeekStartDate: '',
  },
  achievement: {
    level: AchievementLevel.noAct,
    moneyEarned: 0,
  },
  impact: {
    reduction: {
      yours: 0,
      community: 0,
    },
    emissions: {
      yours: 0,
      community: 0,
    },
    milesDriven: {
      yours: 0,
      community: 0,
    },
  },
  gridEmissions: {
    time: '',
    zone: '',
    marginalOperatingEmissionsRate: 0,
    relativeMarginalOperatingEmissionsRate: 0,
  },
  reminder: {
    start: '',
    end: '',
    hasRequest: false,
  },
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: DashboardState = initialState, action: InitActionTypes): DashboardState => {
  switch (action.type) {
    case RESET_DASHBOARD: {
      return {
        ...initialState,
      };
    }

    case DASHBOARD_SUCCESS:
      return {
        ...state,
        history: action.dashboard.history,
        achievement: action.dashboard.achievement,
        impact: action.dashboard.impact,
        reminder: action.dashboard.reminder,
        gridEmissions: action.dashboard.gridEmissions,
      };

    case DASHBOARD_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

// Actions
//
export const dashboardRequest = (siteId: string) => ({ type: DASHBOARD_REQUEST, siteId });
