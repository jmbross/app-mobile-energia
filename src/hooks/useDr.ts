import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  drRequest,
  tabSelect,
  eventsRequest,
  eventSelectRequest,
  earningsRequest,
  earningsSelectRequest,
  eventParticipate,
} from '@/stores/dr';
import { DrHistoryItem, MoneyEarnedItem, PerformanceToDateEnum } from '@/types/dr';
import { ReqEventParticipate } from '@/apis/primary/types';

export default function useDr() {
  const dispatch = useDispatch();

  const fetchDr = useCallback((siteId: string) => dispatch(drRequest(siteId)), [dispatch]);

  const fetchTabSelect = useCallback((tab: PerformanceToDateEnum) => dispatch(tabSelect(tab)), [dispatch]);

  const fetchEventsRequest = useCallback(() => dispatch(eventsRequest()), [dispatch]);

  const fetchEventSelect = useCallback(
    (siteId: string, event: DrHistoryItem) => dispatch(eventSelectRequest(siteId, event)),
    [dispatch],
  );

  const fetchEarningsRequest = useCallback((siteId: string) => dispatch(earningsRequest(siteId)), [dispatch]);

  const fetchEarningsSelect = useCallback(
    (siteId: string, earnings: MoneyEarnedItem) => dispatch(earningsSelectRequest(siteId, earnings)),
    [dispatch],
  );

  const fetchEventParticipate = useCallback(
    (siteId: string, payload: ReqEventParticipate) => dispatch(eventParticipate(siteId, payload)),
    [dispatch],
  );

  return {
    fetchDr,
    fetchTabSelect,
    fetchEventsRequest,
    fetchEventSelect,
    fetchEarningsRequest,
    fetchEarningsSelect,
    fetchEventParticipate,
  };
}
