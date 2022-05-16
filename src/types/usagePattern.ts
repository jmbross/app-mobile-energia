export enum TimePeriod {
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year',
}

export interface UsagePattern {
  timeList: string[];
  selectedTimePeriod?: TimePeriod;
  graph: number[];
  highestValue: number;
  lowestValue: number;
  highestPeriod: string;
  lowestPeriod: string;
  highestPeriodTimestamp: string;
  lowestPeriodTimestamp: string;
  hasSufficientUsageData: boolean;
  range: string;
}
