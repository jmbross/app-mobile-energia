import { UserStatusEnum } from '@/types/dr';

export interface IDRParticipationControlProps {
  currentSiteId: string;
  userStatus: UserStatusEnum;
  userEventId: string;
}

export interface IDRParticipationControlViewProps {
  first: boolean;
  accept: boolean;
  onAccept: () => void;
  onDecline: () => void;

  modalOptOut: boolean;
  modalOptOutClose: () => void;
  modalOptOutOk: () => void;
  modalOptOutCancel: () => void;
}
