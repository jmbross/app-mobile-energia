import React from 'react';
import DRUpcomingEvent from '@/organisms/DRUpcomingEvent';
import DRMultipleUpcomingEvent from '@/organisms/DRMultipleUpcomingEvent';
import { IDRStatusViewProps } from './index.types';
import { Wrapper } from './index.styles';

const DRStatusView = ({ single }: IDRStatusViewProps) => {
  const renderSingleEvent = () => {
    return <DRUpcomingEvent />;
  };

  const renderMultipleEvent = () => {
    return (
      <>
        <DRMultipleUpcomingEvent index={0} showExpand={false} />
        <DRMultipleUpcomingEvent index={1} showExpand />
      </>
    );
  };

  return <Wrapper>{single ? renderSingleEvent() : renderMultipleEvent()}</Wrapper>;
};

export default DRStatusView;
