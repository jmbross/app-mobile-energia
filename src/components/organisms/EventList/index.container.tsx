import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useDr from '@/hooks/useDr';
import { DrHistoryItem } from '@/types/dr';
import EventListView from './index.view';

const EventListContainer = () => {
  const {
    main: { currentSite },
    dr: {
      history: {
        event: { list },
      },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ eventId?: string }>({ eventId: undefined });

  const { fetchEventSelect } = useDr();

  const handlerClick = (item: DrHistoryItem) => {
    if (!item.eventId || state.eventId === item.eventId) {
      return;
    }

    setState({ ...state, eventId: item.eventId });

    fetchEventSelect(currentSite?.id, item);
  };

  return <EventListView items={list} onClick={handlerClick} />;
};

export default EventListContainer;
