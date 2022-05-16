import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';
import { RootState } from '@/stores/index';
import { DrNearestEvent, UserStatusEnum } from '@/types/dr';
import { imageResouce } from '@/helpers/ResourceHelper';
import { IdeaTabType } from './index.types';
import EnergySavingIdeasView from './index.view';

const EnergySavingIdeasContainer = () => {
  const {
    main: { currentSite },
    dr: {
      event: { nearestDrEvents },
    },
  } = useSelector((state: RootState) => state);

  const { t } = useTranslation('common');
  const [state, setState] = useState<{ tabs: IdeaTabType[]; selectedTab: string; nearestDrEvent: DrNearestEvent }>({
    tabs: [],
    selectedTab: '',
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

  const handleClick = (value: string) => {
    setState({ ...state, selectedTab: value });
  };

  const first = () => {
    if (currentSite?.program === undefined) {
      return;
    }

    const ideas = t<string, string[]>(`programs.${currentSite?.program.toLowerCase()}.savingsEventsScreen.ideas`, {
      returnObjects: true,
    });

    const tabs = ideas.map((key) => {
      const title = key;

      /*
        - 이미지 구하는 방법

        const title = batter
        const imageName = Battery;

        const active = imageResouce('applianceBatteryActive');
      */
      const id = nanoid();
      const imageName = title.charAt(0).toUpperCase() + title.slice(1);
      const active = imageResouce(`appliance${imageName}Active`);
      const deactive = imageResouce(`appliance${imageName}Deactive`);

      return { id, title, active, deactive };
    });

    setState({ ...state, tabs, selectedTab: tabs[0].title });
  };

  useEffect(() => {
    const nearestDrEvent = nearestDrEvents[0];

    setState({
      ...state,
      nearestDrEvent,
    });
  }, []);

  useEffect(() => {
    first();
  }, [currentSite?.id]);

  return (
    <EnergySavingIdeasView
      tabs={state.tabs}
      selected={state.selectedTab}
      targetDirection={state.nearestDrEvent.targetDirection}
      onClick={handleClick}
    />
  );
};

export default EnergySavingIdeasContainer;
