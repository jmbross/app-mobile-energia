export interface Dashboard {
  history: EnergyHistory;
  achievement: Achievement;
  impact: EnvironmentalImpact;
  reminder: Reminder;
  gridEmissions: GridEmissions;
}

export interface EnergyHistory {
  hasSufficientUsageData?: boolean;
  weekdayAvg: number;
  lastWeekHigh: number;
  lastWeekLow: number;
  lastWeekHighDay: string;
  lastWeekLowDay: string;
  lastWeekHighDayTimestamp: string;
  lastWeekLowDayTimestamp: string;
  lastWeekGraph: number[];
  thisWeekGraph: number[];
  lastWeekStartDate: string;
}

export enum AchievementLevel {
  gold = 'GOLD',
  silver = 'SILVER',
  bronze = 'BRONZE',
  noAct = 'NO_ACTION',
}

export interface Achievement {
  level: AchievementLevel;
  moneyEarned: number;
}

export interface GridEmissions {
  time: string;
  zone: string;
  marginalOperatingEmissionsRate: number;
  relativeMarginalOperatingEmissionsRate: number;
}

export interface EnvironmentalImpact {
  reduction: {
    yours: number;
    community: number;
  };
  emissions: {
    yours: number;
    community: number;
  };
  milesDriven: {
    yours: number;
    community: number;
  };
}

export interface Reminder {
  start: string;
  end: string;
  hasRequest: boolean;
}
