import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReqUsagePattern } from '@/apis/primary/types';
import { RootState } from '@/stores/index';
import useUsagePattern from '@/hooks/useUsagePattern';
import { TimePeriod } from '@/types/usagePattern';
import UsagePatternView from './index.view';

const UsagePatternContainer = () => {
  const {
    main: { currentSite },
    usagePattern: { dayList, weekList, monthList, yearList, usagePatternPeriod },
  } = useSelector((state: RootState) => state);

  const { fetchUsagePattern } = useUsagePattern();
  const [state, setState] = useState({ tabLinkSelected: TimePeriod.day, range: 'initial' });

  useEffect(() => {
    setState({ ...state, tabLinkSelected: usagePatternPeriod, range: dateRange().range });
  }, []);

  const dateRange = () => {
    if (state.tabLinkSelected === TimePeriod.day) {
      return dayList;
    }

    if (state.tabLinkSelected === TimePeriod.week) {
      return weekList;
    }

    if (state.tabLinkSelected === TimePeriod.month) {
      return monthList;
    }

    return yearList;
  };

  const handleTab = (period: TimePeriod) => {
    if (!currentSite || state.tabLinkSelected === period) {
      return;
    }

    setState({ ...state, tabLinkSelected: period });

    const payload: ReqUsagePattern = {
      siteId: currentSite.id,
      timePeriod: period,
      range: 'initial',
    };
    fetchUsagePattern(payload);
  };

  const handleRange = (range: string) => {
    if (!currentSite || state.range === range) {
      return;
    }

    setState({ ...state, range });

    const payload: ReqUsagePattern = {
      siteId: currentSite.id,
      timePeriod: state.tabLinkSelected,
      range,
    };
    fetchUsagePattern(payload);
  };

  const handlePrevRange = () => {
    const { timeList, range } = dateRange();

    const currentIndex = timeList.findIndex((date: string) => date === range);
    const changeRange = timeList[Math.min(timeList.length, currentIndex + 1)];

    handleRange(changeRange);
  };

  const handleNextRange = () => {
    const { timeList, range } = dateRange();

    const currentIndex = timeList.findIndex((date: string) => date === range);
    const changeRange = timeList[Math.max(0, currentIndex - 1)];

    handleRange(changeRange);
  };

  return (
    <UsagePatternView
      items={dateRange()}
      tabLinkSelected={state.tabLinkSelected}
      onTabClick={handleTab}
      onRange={handleRange}
      onPrevRange={handlePrevRange}
      onNextRange={handleNextRange}
    />
  );
};

export default UsagePatternContainer;
