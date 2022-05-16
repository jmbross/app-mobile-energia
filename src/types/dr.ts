import { AchievementLevel } from '@/types/dashboard';

export enum PerformanceToDateEnum {
  events = 'events',
  moneyEarned = 'moneyEarned',
}

export enum EventStatusEnum {
  NoEvent = 'NO_EVENT',
  UpcomingEvent = 'UPCOMING_EVENT',
  OnEvent = 'ON_EVENT',
}

export enum UserStatusEnum {
  DefaultEvent = 'DEFAULT_EVENT',
  EventConfirmed = 'EVENT_CONFIRMED',
  OptOut = 'OPT_OUT',
}

export enum TargetDirectionEnum {
  loadDecrease = 'load_decrease',
  loadIncrease = 'load_increase',
  loadMixed = 'load_mixed',
}

export type DrNearestEvent = {
  eventTimeRange: string;
  length: string;
  end: string;
  canceled: boolean;
  userEventId: string;
  start: string;
  hasBeenNotified: boolean;
  userStatus: UserStatusEnum;
  targetDirection?: TargetDirectionEnum;
};

export interface DrHistoryItem {
  eventId?: string;
  name: string;
  date: string;
  time: string;
  percentageChangeInUsage: number; // calculated percentage
  hasUsageData: boolean;
  hadJoined: boolean;
  actualRequestUsage: number;
  targetDirection: TargetDirectionEnum;
  timeRange: string;
  quickViewData: {
    hadReduced: boolean;
    changeInUsage: number;
    moneyEarned: number;
    typicalDayUsage: number;
  };
  detailData: {
    graphData: {
      userEnergyUsage: {
        time: string;
        usage: number;
        onRequest: boolean;
      }[];
      typicalUsage: {
        time: string;
        usage: number;
      }[];
    };
  };
  userStatus: UserStatusEnum;
}

export interface MoneyEarned {
  totalMoneyEarned: number;
  eventMoneyEarned: number;
  otherMoneyEarned: number;
  moneyEarnedList: MoneyEarnedItem[];
}

export enum incentiveKindEnum {
  enrollment = 'ENROLLMENT',
  homeEnergySurvey = 'HOME_ENERGY_SURVEY',
  referral = 'REFERRAL_BONUS',
  event = 'EVENT',
  promotion = 'PROMOTIONAL',
  customerExperienceSurvey = 'CUSTOMER_EXPERIENCE_SURVEY',
  participation = 'PARTICIPATION',
}

export interface MoneyEarnedItem {
  earningId: string;
  earnedDate: string;
  runningBalance: number;
  changeInAmount: number;
  incentiveKind: incentiveKindEnum;
  incentiveKindId: number;
  moneyEarnedHadIncreased: boolean;
  sequenceNumber: number;
  eventId: string;
}

export interface DetailGrpahItem {
  userEnergyUsage: {
    time: string;
    usage: number;
    inRequestPeriod: boolean;
  }[];
  typicalUsage: {
    time: string;
    usage: number;
  }[];
}

export interface PerformanceToDateForEvent {
  moneyEarned: number;
  level: AchievementLevel.gold;
  electricitySaved: number;
  numRequestsTotal: number;
  percentageChangeInUsage: number;
  historyList: DrHistoryItem[];
  targetDirection: TargetDirectionEnum;
}

export interface EventSummary {
  total: number;
  energyImpact: number;
  level: AchievementLevel;
}

export interface EarningSummary {
  total: number;
  event: number;
  other: number;
}
