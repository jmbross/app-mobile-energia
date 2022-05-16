import { DrNearestEvent, EventStatusEnum, PerformanceToDateForEvent, UserStatusEnum } from '@/types/dr';
import { TimePeriod } from '@/types/usagePattern';

export interface ReqDashboard {
  siteId: string;
}

export interface ReqUsagePattern {
  siteId: string;
  timePeriod: TimePeriod;
  range: string;
}

export interface ReqDR {
  siteId: string;
}

export interface ReqDrEarning {
  siteId: string;
}

export interface ReqDrEvent {
  siteId: string;
  eventId: string;
}

export interface ReqEventParticipate {
  userEventId: string;
  userStatus: UserStatusEnum;
  optOutReason?: string;
  optOutReasonOther?: string;
}

export interface ReqMessage {
  messageId: string;
}

export interface resDR {
  eventStatus: EventStatusEnum;
  userEventId: string;
  userStatus: UserStatusEnum;
  nearestDrEvent: DrNearestEvent;
  nearestDrEvents: DrNearestEvent[];
  recentlyEndedEvent: {
    pastUserEventId: string;
    eventParticipatedRecentlyEnded: boolean;
    recentlyEndedEventNotified: boolean;
    start: string;
    end: string;
  };
  isUpcomingNewEventNotified: boolean;
  selectedDrHistoryItem: string;
  historyData: PerformanceToDateForEvent;
}
