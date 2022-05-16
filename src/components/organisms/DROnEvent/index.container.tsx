import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTimer } from 'react-timer-hook';
import { RootState } from '@/stores/index';
import { DrNearestEvent, UserStatusEnum } from '@/types/dr';
import DROnEventView from './index.view';
import { IDROnEventProps } from './index.types';

const DROnEventContainer = ({ index, userStatus }: IDROnEventProps) => {
  const {
    dr: {
      event: { nearestDrEvents },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ autoHide: boolean; nearestDrEvent: DrNearestEvent }>({
    autoHide: false,
    nearestDrEvent: {
      eventTimeRange: '',
      length: '',
      end: '',
      canceled: false,
      userEventId: '',
      start: '',
      hasBeenNotified: false,
      userStatus: UserStatusEnum.DefaultEvent,
    },
  });

  const { seconds, minutes, hours, restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire: () => console.warn('onExpire called'),
  });

  useEffect(() => {
    if (nearestDrEvents.length === 0) {
      return;
    }

    const nearestDrEvent = nearestDrEvents[index];

    setState({
      ...state,
      nearestDrEvent,
    });

    restart(new Date(nearestDrEvent.end));
  }, []);

  return (
    <DROnEventView
      accept={state.nearestDrEvent.userStatus === UserStatusEnum.EventConfirmed}
      userStatus={userStatus}
      startDate={new Date(state.nearestDrEvent.start)}
      endDate={new Date(state.nearestDrEvent.end)}
      timerHours={hours}
      timerMinutes={minutes}
      timerSeconds={seconds}
    />
  );
};

export default DROnEventContainer;
