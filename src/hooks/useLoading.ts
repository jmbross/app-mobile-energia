import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { changeLoading } from '@/stores/loading';

export default function useLoading() {
  const dispatch = useDispatch();

  const fetchLoading = useCallback((loading: boolean) => dispatch(changeLoading(loading)), [dispatch]);

  return {
    fetchLoading,
  };
}
