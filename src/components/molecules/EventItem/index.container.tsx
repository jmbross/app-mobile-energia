import React from 'react';
import EventItemView from './index.view';
import { IEventItemProps } from './index.types';

const EventItemContainer = ({ item, onClick }: IEventItemProps) => {
  return <EventItemView item={item} onClick={onClick} />;
};

export default EventItemContainer;
