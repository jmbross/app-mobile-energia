import { EventStatusEnum, UserStatusEnum } from '@/types/dr';

export interface IDRUpcomingEventProps {
  index: number;
}

export interface IDRUpcomingEventViewProps {
  currentSiteId: string;
  userEventId: string;
  userStatus: UserStatusEnum;
  eventStatus: EventStatusEnum;

  first: boolean;
  accept: boolean;
  startDate: Date;
  endDate: Date;
}
