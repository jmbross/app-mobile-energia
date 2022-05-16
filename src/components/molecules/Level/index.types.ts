import { AchievementLevel } from '@/types/dashboard';

export interface IStyleL {
  size: 'small' | 'medium' | 'large';
}
export interface ILevelProps extends Partial<IStyleL> {
  level: AchievementLevel;
  onClick?: () => void;
}
