import React, { useState } from 'react';
import useDr from '@/hooks/useDr';
import { ReqEventParticipate } from '@/apis/primary/types';
import { UserStatusEnum } from '@/types/dr';
import DRParticipationControlView from './index.view';
import { IDRParticipationControlProps } from './index.types';

const DRParticipationControlContainer = ({ currentSiteId, userStatus, userEventId }: IDRParticipationControlProps) => {
  const [modal, setModal] = useState({ optOut: false });

  const { fetchEventParticipate } = useDr();

  const handleAccept = () => {
    const payload: ReqEventParticipate = {
      userStatus: UserStatusEnum.EventConfirmed,
      userEventId,
    };

    fetchEventParticipate(currentSiteId, payload);
  };

  const handleDecline = () => {
    setModal({ ...modal, optOut: true });
  };

  const handleModalOutOK = (answer: string, other: string) => {
    setModal({ ...modal, optOut: false });

    const payload: ReqEventParticipate = {
      userStatus: UserStatusEnum.OptOut,
      userEventId,
      optOutReason: answer,
      optOutReasonOther: other,
    };

    fetchEventParticipate(currentSiteId, payload);
  };

  return (
    <DRParticipationControlView
      first={userStatus === UserStatusEnum.DefaultEvent}
      accept={userStatus === UserStatusEnum.EventConfirmed}
      onAccept={handleAccept}
      onDecline={handleDecline}
      modalOptOut={modal.optOut}
      modalOptOutClose={() => setModal({ ...modal, optOut: false })}
      modalOptOutOk={handleModalOutOK}
      modalOptOutCancel={() => setModal({ ...modal, optOut: false })}
    />
  );
};

export default DRParticipationControlContainer;
