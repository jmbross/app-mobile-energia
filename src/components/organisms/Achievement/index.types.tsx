import { AchievementLevel } from '@/types/dashboard';

export interface IAchievementViewProps {
  moneyEarned: number;
  level: AchievementLevel;

  onHelp: () => void;

  modalReward: boolean;
  modalRewardClose: () => void;
}

export interface IStyleItemProps {
  underline?: boolean;
}
