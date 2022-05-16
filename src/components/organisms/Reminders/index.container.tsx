import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import RemindersView from './index.view';

const RemindersContainer = () => {
  const {
    dashboard: { reminder },
  } = useSelector((state: RootState) => state);

  return (
    <RemindersView
      hasRequest={reminder.hasRequest}
      startDate={new Date(reminder.start)}
      endDate={new Date(reminder.end)}
    />
  );
};

export default RemindersContainer;
