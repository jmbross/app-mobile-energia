import { MoneyEarnedItem } from '@/types/dr';
import { PerformanceToDateEnum } from '@/organisms/PerformanceToDate';

export interface ISavingsEventsHistoryDetailViewProps {
  selectedTab: PerformanceToDateEnum;
  selectedEarnings?: MoneyEarnedItem;
}
