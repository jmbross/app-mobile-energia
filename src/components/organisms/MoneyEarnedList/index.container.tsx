import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MoneyEarnedItem } from '@/types/dr';
import useDr from '@/hooks/useDr';
import { RootState } from '@/stores/index';
import MoneyEarnedListView from './index.view';

const MoneyEarnedListContainer = () => {
  const {
    main: { currentSite },
    dr: {
      history: {
        earnings: { list },
      },
    },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState<{ earningId?: string }>({ earningId: undefined });
  const { fetchEarningsRequest, fetchEarningsSelect } = useDr();

  useEffect(() => {
    fetchEarningsRequest(currentSite?.id);
  }, []);

  const handlerClick = (item: MoneyEarnedItem) => {
    if (state.earningId === item.earningId) {
      return;
    }

    setState({ ...state, earningId: item.earningId });

    fetchEarningsSelect(currentSite?.id, item);
  };

  return <MoneyEarnedListView items={list} onClick={handlerClick} />;
};

export default MoneyEarnedListContainer;
