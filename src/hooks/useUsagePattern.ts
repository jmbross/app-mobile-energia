import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { ReqUsagePattern } from '@/apis/primary/types';
import { usagePatternRequest, changeUsagePattern } from '@/stores/usagePattern';
import { TimePeriod } from '@/types/usagePattern';

export default function useUsagePattern() {
  const dispatch = useDispatch();

  const fetchUsagePattern = useCallback((req: ReqUsagePattern) => dispatch(usagePatternRequest(req)), [dispatch]);

  const fetchUsagePatternPeriod = useCallback((period: TimePeriod) => dispatch(changeUsagePattern(period)), [dispatch]);

  return {
    fetchUsagePattern,
    fetchUsagePatternPeriod,
  };
}
