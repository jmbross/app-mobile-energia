import { UserStatusEnum } from '@/types/dr';

export interface IDROnEventProps {
  index: number;
  userStatus: UserStatusEnum;
}

export interface IDROnEventViewProps extends Omit<IDROnEventProps, 'index'> {
  accept: boolean;
  startDate: Date;
  endDate: Date;

  timerSeconds: number;
  timerMinutes: number;
  timerHours: number;
}
