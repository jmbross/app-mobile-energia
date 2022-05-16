import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { dashboardRequest } from '@/stores/dashboard';

export default function useDashboard() {
  const dispatch = useDispatch();

  const fetchDashboard = useCallback((siteId: string) => dispatch(dashboardRequest(siteId)), [dispatch]);

  return {
    fetchDashboard,
  };
}
