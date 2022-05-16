import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { changePhoneNumber, changeAppLogin } from '@/stores/temporary';

export default function useTemporary() {
  const dispatch = useDispatch();

  const fetchChangePhoneNumber = useCallback(
    (phoneNumber: string) => dispatch(changePhoneNumber(phoneNumber)),
    [dispatch],
  );

  const fetchChangeAppLogin = useCallback((appLogin: boolean) => dispatch(changeAppLogin(appLogin)), [dispatch]);

  return {
    fetchChangePhoneNumber,
    fetchChangeAppLogin,
  };
}
