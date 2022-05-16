import { EventStatusEnum, UserStatusEnum } from '@/types/dr';

export interface IDRMultipleUpcomingEventProps {
  showExpand: boolean;
  index: number;
}

export interface IStyleWrapper {
  index: number;
}

export interface IDRMultipleUpcomingEventViewProps extends IDRMultipleUpcomingEventProps {
  currentSiteId: string;
  userEventId: string;
  userStatus: UserStatusEnum;
  eventStatus: EventStatusEnum;

  first: boolean;
  accept: boolean;
  startDate: Date;
  endDate: Date;

  expand: boolean;
  onExpand: () => void;
}
