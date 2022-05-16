import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { DrNearestEvent, EventStatusEnum, UserStatusEnum } from '@/types/dr';
import DRMultipleUpcomingEventView from './index.view';
import { IDRMultipleUpcomingEventProps } from './index.types';
import useDr from '@/hooks/useDr';

const DRMultipleUpcomingEventContainer = ({ index, showExpand }: IDRMultipleUpcomingEventProps) => {
  const {
    main: { currentSite },
    dr: {
      event: { nearestDrEvents },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ expand: boolean; eventStatus: EventStatusEnum; nearestDrEvent: DrNearestEvent }>(
    {
      expand: true,
      eventStatus: EventStatusEnum.UpcomingEvent,
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
    },
  );

  const { fetchDr } = useDr();

  useEffect(() => {
    const nearestDrEvent = nearestDrEvents[index];
    if (nearestDrEvent.userEventId === state.nearestDrEvent.userEventId) {
      return;
    }

    setState({
      ...state,
      eventStatus: EventStatusEnum.NoEvent,
      nearestDrEvent,
    });
  }, [nearestDrEvents]);

  useEffect(() => {
    if (state.nearestDrEvent.userEventId === '') {
      return undefined;
    }

    setState({
      ...state,
      eventStatus: EventStatusEnum.UpcomingEvent,
    });

    const timer = setInterval(() => {
      if (new Date() >= new Date(state.nearestDrEvent.start)) {
        setState({
          ...state,
          eventStatus: EventStatusEnum.OnEvent,
        });
      }

      if (new Date() >= new Date(state.nearestDrEvent.end)) {
        setState({ ...state, eventStatus: EventStatusEnum.NoEvent });

        // refresh
        if (currentSite) {
          fetchDr(currentSite.id);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [state.nearestDrEvent.userEventId]);

  const handleExpand = () => {
    setState({ ...state, expand: !state.expand });
  };

  return (
    <DRMultipleUpcomingEventView
      index={index}
      currentSiteId={currentSite?.id}
      first={state.nearestDrEvent.userStatus === UserStatusEnum.DefaultEvent}
      accept={state.nearestDrEvent.userStatus === UserStatusEnum.EventConfirmed}
      startDate={new Date(state.nearestDrEvent.start)}
      endDate={new Date(state.nearestDrEvent.end)}
      userEventId={state.nearestDrEvent.userEventId}
      userStatus={state.nearestDrEvent.userStatus}
      eventStatus={state.eventStatus}
      expand={state.expand}
      showExpand={showExpand}
      onExpand={handleExpand}
    />
  );
};

export default DRMultipleUpcomingEventContainer;
