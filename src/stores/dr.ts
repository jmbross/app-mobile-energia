import { ReqEventParticipate, resDR } from '@/apis/primary/types';
import {
  DrHistoryItem,
  DrNearestEvent,
  EarningSummary,
  EventStatusEnum,
  EventSummary,
  MoneyEarned,
  MoneyEarnedItem,
  PerformanceToDateEnum,
  UserStatusEnum,
} from '@/types/dr';
import { AchievementLevel } from '@/types/dashboard';

// Types
//
// Reset
export const RESET_DR = 'dr/RESET_DR';

// Request All Data
export const DR_REQUEST = 'dr/DR_REQUEST';
export const DR_SUCCESS = 'dr/DR_SUCCESS';
export const DR_FAILURE = 'dr/DR_FAILURE';

// Event Participate
export const EVENT_PARTICIPATE_REQUEST = 'dr/EVENT_PARTICIPATE_REQUEST';
export const EVENT_PARTICIPATE_SUCCESS = 'dr/EVENT_PARTICIPATE_SUCCESS';
export const EVENT_PARTICIPATE_FAILURE = 'dr/EVENT_PARTICIPATE_FAILURE';

// Select History Tab
export const TAB_SELECT = 'dr/TAB_SELECT';

// Request Events
export const EVENTS_REQUEST = 'dr/EVENTS_REQUEST';
export const EVENTS_SUCCESS = 'dr/EVENTS_SUCCESS';
export const EVENTS_FAILURE = 'dr/EVENTS_FAILURE';

// Select Event
export const EVENT_SELECT_REQUEST = 'dr/EVENT_SELECT_REQUEST';
export const EVENT_SELECT_SUCCESS = 'dr/EVENT_SELECT_SUCCESS';
export const EVENT_SELECT_FAILURE = 'dr/EVENT_SELECT_FAILURE';

// Request Earnings
export const EARNINGS_REQUEST = 'dr/EARNINGS_REQUEST';
export const EARNINGS_SUCCESS = 'dr/EARNINGS_SUCCESS';
export const EARNINGS_FAILURE = 'dr/EARNINGS_FAILURE';

// Select Earnings
export const EARNING_SELECT_REQUEST = 'dr/EARNING_SELECT_REQUEST';
export const EARNING_SELECT_SUCCESS = 'dr/EARNING_SELECT_SUCCESS';
export const EARNING_SELECT_FAILURE = 'dr/EARNING_SELECT_FAILURE';

interface ResetDrAction {
  type: typeof RESET_DR;
}

interface DrRequestAction {
  type: typeof DR_REQUEST;
  siteId: string;
}

interface DrSuccessAction {
  type: typeof DR_SUCCESS;
  dr: resDR;
}

interface DrFailureAction {
  type: typeof DR_FAILURE;
}

interface EventParticipateRequestAction {
  type: typeof EVENT_PARTICIPATE_REQUEST;
  siteId: string;
  payload: ReqEventParticipate;
}

interface EventParticipateSuccessAction {
  type: typeof EVENT_PARTICIPATE_SUCCESS;
  userEventId: string;
  userStatus: UserStatusEnum;
}

interface EventParticipateFailureAction {
  type: typeof EVENT_PARTICIPATE_FAILURE;
}

interface TabSelectAction {
  type: typeof TAB_SELECT;
  tab: PerformanceToDateEnum;
}

interface EventsRequestAction {
  type: typeof EVENTS_REQUEST;
}

interface EventsSuccessAction {
  type: typeof EVENTS_SUCCESS;
}

interface EventsFailureAction {
  type: typeof EVENTS_FAILURE;
}

interface EventSelectRequestAction {
  type: typeof EVENT_SELECT_REQUEST;
  siteId: string;
  event: DrHistoryItem;
}

interface EventSelectSuccessAction {
  type: typeof EVENT_SELECT_SUCCESS;
  event: DrHistoryItem;
}

interface EventSelectFailureAction {
  type: typeof EVENT_SELECT_FAILURE;
}

interface EarningsRequestAction {
  type: typeof EARNINGS_REQUEST;
}

interface EarningSuccessAction {
  type: typeof EARNINGS_SUCCESS;
  earnings: MoneyEarned;
}

interface EarningsFailureAction {
  type: typeof EARNINGS_FAILURE;
}

interface EarningSelectRequestAction {
  type: typeof EARNING_SELECT_REQUEST;
  earnings: MoneyEarnedItem;
}

interface EarningSelectSuccessAction {
  type: typeof EARNING_SELECT_SUCCESS;
  earnings: MoneyEarnedItem;
  event?: DrHistoryItem;
}

interface EarningSelectFailureAction {
  type: typeof EARNING_SELECT_FAILURE;
}

type InitActionTypes =
  | ResetDrAction
  | DrRequestAction
  | DrSuccessAction
  | DrFailureAction
  | EventParticipateRequestAction
  | EventParticipateSuccessAction
  | EventParticipateFailureAction
  | TabSelectAction
  | EventsRequestAction
  | EventsSuccessAction
  | EventsFailureAction
  | EventSelectRequestAction
  | EventSelectSuccessAction
  | EventSelectFailureAction
  | EarningsRequestAction
  | EarningSuccessAction
  | EarningsFailureAction
  | EarningSelectRequestAction
  | EarningSelectSuccessAction
  | EarningSelectFailureAction;

// initial state
//
export interface DrState {
  event: {
    eventStatus: EventStatusEnum;
    recentlyEndedEvent: {
      pastUserEventId: string;
      eventParticipatedRecentlyEnded: boolean;
      recentlyEndedEventNotified: boolean;
      start: string;
      end: string;
    };
    nearestDrEvents: DrNearestEvent[];
  };
  history: {
    selectedTab: PerformanceToDateEnum;
    event: {
      summary: EventSummary;
      list: DrHistoryItem[];
      selectedEvent?: DrHistoryItem;
    };
    earnings: {
      summary: EarningSummary;
      list: MoneyEarnedItem[];
      selectedEarnings?: MoneyEarnedItem;
      selectedEarningsEvent?: DrHistoryItem;
    };
  };
}

const initialState: DrState = {
  event: {
    eventStatus: EventStatusEnum.NoEvent,
    nearestDrEvents: [
      {
        eventTimeRange: '',
        length: '',
        end: '',
        canceled: false,
        userEventId: '',
        start: '',
        hasBeenNotified: false,
        userStatus: UserStatusEnum.DefaultEvent,
      },
    ],
    recentlyEndedEvent: {
      pastUserEventId: '',
      eventParticipatedRecentlyEnded: false,
      recentlyEndedEventNotified: false,
      start: '',
      end: '',
    },
  },
  history: {
    selectedTab: 'events',
    event: {
      summary: {
        total: 0,
        energyImpact: 0,
        level: AchievementLevel.noAct,
      },
      list: [],
      selectedEvent: undefined,
    },
    earnings: {
      summary: {
        total: 0,
        event: 0,
        other: 0,
      },
      list: [],
      selectedEarnings: undefined,
      selectedEarningsEvent: undefined,
    },
  },
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: DrState = initialState, action: InitActionTypes): DrState => {
  switch (action.type) {
    case RESET_DR:
      return {
        ...initialState,
      };

    case DR_SUCCESS:
      return {
        ...state,
        event: {
          eventStatus: action.dr.eventStatus,
          recentlyEndedEvent: {
            pastUserEventId: action.dr.recentlyEndedEvent.pastUserEventId,
            eventParticipatedRecentlyEnded: action.dr.recentlyEndedEvent.eventParticipatedRecentlyEnded,
            recentlyEndedEventNotified: action.dr.recentlyEndedEvent.recentlyEndedEventNotified,
            start: action.dr.recentlyEndedEvent.start,
            end: action.dr.recentlyEndedEvent.end,
          },
          nearestDrEvents: action.dr.nearestDrEvents,
        },
        history: {
          ...state.history,
          event: {
            summary: {
              total: action.dr.historyData.numRequestsTotal,
              energyImpact: action.dr.historyData.electricitySaved,
              level: action.dr.historyData.level,
            },
            selectedEvent: undefined,
            list: action.dr.historyData.historyList,
          },
        },
      };

    case DR_FAILURE:
      return {
        ...state,
      };

    case EVENT_PARTICIPATE_SUCCESS: {
      const { nearestDrEvents } = state.event;

      const tmp = nearestDrEvents.map((nearestDrEvent) => {
        if (nearestDrEvent.userEventId === action.userEventId) {
          Object.assign(nearestDrEvent, { userStatus: action.userStatus });
        }

        return nearestDrEvent;
      });

      return {
        ...state,
        event: {
          ...state.event,
          nearestDrEvents: tmp,
        },
      };
    }

    case EVENT_PARTICIPATE_FAILURE:
      return {
        ...state,
      };

    case TAB_SELECT:
      return {
        ...state,
        history: { ...state.history, selectedTab: action.tab },
      };

    case EVENTS_SUCCESS:
      return {
        ...state,
      };

    case EVENTS_FAILURE:
      return {
        ...state,
      };

    case EVENT_SELECT_SUCCESS:
      return {
        ...state,
        history: { ...state.history, event: { ...state.history.event, selectedEvent: action.event } },
      };

    case EVENT_SELECT_FAILURE:
      return {
        ...state,
      };

    case EARNINGS_SUCCESS:
      return {
        ...state,
        history: {
          ...state.history,
          earnings: {
            summary: {
              total: action.earnings.totalMoneyEarned,
              event: action.earnings.eventMoneyEarned,
              other: action.earnings.otherMoneyEarned,
            },
            selectedEarnings: undefined,
            selectedEarningsEvent: undefined,
            list: action.earnings.moneyEarnedList,
          },
        },
      };

    case EARNINGS_FAILURE:
      return {
        ...state,
      };

    case EARNING_SELECT_SUCCESS:
      return {
        ...state,
        history: {
          ...state.history,
          earnings: {
            ...state.history.earnings,
            selectedEarnings: action.earnings,
            selectedEarningsEvent: action.event,
          },
        },
      };

    case EARNING_SELECT_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

// Actions
//
export const drRequest = (siteId: string) => ({ type: DR_REQUEST, siteId });

export const tabSelect = (tab: PerformanceToDateEnum) => ({ type: TAB_SELECT, tab });

export const eventsRequest = () => ({ type: EVENTS_REQUEST });

export const eventSelectRequest = (siteId: string, event: DrHistoryItem) => ({
  type: EVENT_SELECT_REQUEST,
  siteId,
  event,
});

export const earningsRequest = (siteId: string) => ({ type: EARNINGS_REQUEST, siteId });

export const earningsSelectRequest = (siteId: string, earnings: MoneyEarnedItem) => ({
  type: EARNING_SELECT_REQUEST,
  siteId,
  earnings,
});

export const eventParticipate = (siteId: string, payload: ReqEventParticipate) => ({
  type: EVENT_PARTICIPATE_REQUEST,
  siteId,
  payload,
});
