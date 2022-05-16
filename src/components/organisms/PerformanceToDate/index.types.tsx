import { EventSummary, EarningSummary, PerformanceToDateEnum } from '@/types/dr';

export interface IPerformanceToDateViewProps extends IPerformanceToDateProps {
  eventData?: EventSummary;
  earningData?: EarningSummary;
  onHelp: () => void;
  modalReward: boolean;
  modalRewardClose: () => void;
}

export interface IPerformanceToDateProps {
  type: PerformanceToDateEnum;
}
