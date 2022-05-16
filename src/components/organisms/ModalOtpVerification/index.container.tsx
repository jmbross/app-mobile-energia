import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReqPhoneOtpRequest, ReqPhoneOtpVerification } from '@/apis/enrollment/types';
import { useSetting } from '@/hooks/index';
import { RootState } from '@/stores/index';
import { OTPStatus } from '@/types/setting';
import { IModalOtpVerificationProps } from './index.types';
import ModalOtpVerificationView from './index.view';

const ModalOtpVerificationContainer = ({ show }: IModalOtpVerificationProps) => {
  const {
    temporary: { phoneNumber },
  } = useSelector((state: RootState) => state);

  const { fetchChangePhoneOtp, fetchPhoneOtpRequest, fetchPhoneOtpVerification } = useSetting();

  const [state, setState] = useState({ otpCode: '', disabledVerify: true });

  useEffect(() => {
    setState({ ...state, otpCode: '', disabledVerify: true });
  }, []);

  const handleChangeOtpCode = (value: string) => {
    const disabled = value === '' || value.length !== 6;

    setState({
      ...state,
      otpCode: value,
      disabledVerify: disabled,
    });
  };

  const handleVerification = () => {
    const payload: ReqPhoneOtpVerification = { otp: state.otpCode };
    fetchPhoneOtpVerification(phoneNumber, payload);
  };

  const handleResend = () => {
    handleChangeOtpCode('');

    const payload: ReqPhoneOtpRequest = { phoneNumber };
    fetchPhoneOtpRequest(payload);
  };

  const handleClose = () => {
    fetchChangePhoneOtp(OTPStatus.none);
  };

  return (
    <ModalOtpVerificationView
      disabledVerify={state.disabledVerify}
      show={show}
      onClose={handleClose}
      onVerification={handleVerification}
      onResend={handleResend}
      otpCode={state.otpCode}
      onChangeOtpCode={handleChangeOtpCode}
    />
  );
};

export default ModalOtpVerificationContainer;
