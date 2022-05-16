import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useDr from '@/hooks/useDr';
import { DrNearestEvent, EventStatusEnum, UserStatusEnum } from '@/types/dr';
import DRUpcomingEventView from './index.view';

const DRUpcomingEventContainer = () => {
  const {
    main: { currentSite },
    dr: {
      event: { nearestDrEvents },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ eventStatus: EventStatusEnum; nearestDrEvent: DrNearestEvent }>({
    eventStatus: EventStatusEnum.NoEvent,
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

  const { fetchDr } = useDr();

  useEffect(() => {
    if (nearestDrEvents.length === 0) {
      return;
    }

    const nearestDrEvent = nearestDrEvents[0];
    if (nearestDrEvent.userEventId === state.nearestDrEvent.userEventId) {
      return;
    }

    setState({
      ...state,
      eventStatus: EventStatusEnum.NoEvent,
      nearestDrEvent,
    });
  }, [currentSite?.id]);

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

  return (
    <DRUpcomingEventView
      currentSiteId={currentSite?.id}
      userEventId={state.nearestDrEvent.userEventId}
      userStatus={state.nearestDrEvent.userStatus}
      eventStatus={state.eventStatus}
      first={state.nearestDrEvent.userStatus === UserStatusEnum.DefaultEvent}
      accept={state.nearestDrEvent.userStatus === UserStatusEnum.EventConfirmed}
      startDate={new Date(state.nearestDrEvent.start)}
      endDate={new Date(state.nearestDrEvent.end)}
    />
  );
};

export default DRUpcomingEventContainer;
