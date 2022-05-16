import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReqUpdateUserInfo } from '@/apis/auth/types';
import { useAccount, useSetting } from '@/hooks/index';
import { RootState } from '@/stores/index';
import { OTPStatus } from '@/types/setting';
import AccountView from './index.view';

const AccountContainer = () => {
  const {
    auth: { userInfo },
    setting: { language, phoneStatus },
  } = useSelector((state: RootState) => state);

  const [state, setState] = useState({ firstName: '', lastName: '', disabledSave: true });

  const { fetchUpdateUserInfo, fetchLogout } = useAccount();
  const { fetchChangePhoneOtp } = useSetting();

  useEffect(() => {
    setState({ ...state, firstName: userInfo.firstName, lastName: userInfo.lastName, disabledSave: true });
  }, [userInfo.firstName, userInfo.lastName]);

  const handleFirstName = (value: string) => {
    const disabled = userInfo.lastName === state.lastName && userInfo.firstName === value;

    setState({ ...state, firstName: value, disabledSave: disabled });
  };

  const handleLastName = (value: string) => {
    const disabled = userInfo.lastName === value && userInfo.firstName === state.firstName;

    setState({ ...state, lastName: value, disabledSave: disabled });
  };

  const handleSave = () => {
    const payload: ReqUpdateUserInfo = {
      firstName: state.firstName,
      lastName: state.lastName,
    };
    fetchUpdateUserInfo(payload);
  };

  const handleLogout = () => {
    fetchLogout(userInfo.oidcIdToken, userInfo.id);
  };

  const handleChangePassword = () => {
    window.open(`https://account.olivineinc.com/Account/ChangePassword?ui_locales=${language}`, '_blank');
  };

  const handleSmsPhoneEdit = () => {
    fetchChangePhoneOtp(OTPStatus.request);
  };

  const handleRemovePhone = () => {
    const payload: ReqUpdateUserInfo = {
      phoneNumber: '',
    };
    fetchUpdateUserInfo(payload, () => {
      console.log();
    });
  };

  return (
    <AccountView
      disabledSave={state.disabledSave}
      firstName={state.firstName}
      lastName={state.lastName}
      email={userInfo.email}
      phoneNumber={userInfo.phoneNumber}
      onFirstName={handleFirstName}
      onLastName={handleLastName}
      onPassword={handleChangePassword}
      onSmsPhoneEdit={handleSmsPhoneEdit}
      onSmsPhoneRemove={handleRemovePhone}
      onSave={handleSave}
      onLogout={handleLogout}
      modalOtpRequest={phoneStatus === OTPStatus.request}
      modalOtpVerification={phoneStatus === OTPStatus.verification}
      modalOtpVerified={phoneStatus === OTPStatus.verified}
      modalOtpError={phoneStatus === OTPStatus.error || phoneStatus === OTPStatus.notVerified}
      modalOtpResent={phoneStatus === OTPStatus.resent}
    />
  );
};

export default AccountContainer;
