import { UsagePattern, TimePeriod } from '@/types/usagePattern';

export interface IUsagePatternViewProps {
  items: UsagePattern;

  tabLinkSelected: TimePeriod;

  onTabClick: (tabName: TimePeriod) => void;
  onRange: (range: string) => void;
  onPrevRange: () => void;
  onNextRange: () => void;
}
