import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReqPhoneOtpRequest } from '@/apis/enrollment/types';
import { RootState } from '@/stores/index';
import { useSetting, useTemporary } from '@/hooks/index';
import { hyphenPhoneNumber } from '@/helpers/RegexHelper';
import { OTPStatus } from '@/types/setting';
import ModalOtpRequestView from './index.view';
import { IModalOtpRequestProps } from './index.types';

const ModalOtpRequestContainer = ({ show }: IModalOtpRequestProps) => {
  const {
    auth: {
      userInfo: { phoneNumber },
    },
  } = useSelector((state: RootState) => state);

  const { fetchPhoneOtpRequest, fetchChangePhoneOtp } = useSetting();
  const { fetchChangePhoneNumber } = useTemporary();

  const [state, setState] = useState({ phoneNumber: '', disabledSendCode: true });

  useEffect(() => {
    if (!phoneNumber) {
      return;
    }

    const disabled = phoneNumber === '';
    setState({ ...state, phoneNumber, disabledSendCode: disabled });
  }, []);

  const handleChangePhoneNumber = (value: string) => {
    const retPhoneNumber = hyphenPhoneNumber(value);

    const disabled = retPhoneNumber === '' || phoneNumber === retPhoneNumber || retPhoneNumber.length !== 12;

    setState({
      ...state,
      phoneNumber: retPhoneNumber,
      disabledSendCode: disabled,
    });

    fetchChangePhoneNumber(retPhoneNumber);
  };

  const handleOk = () => {
    const payload: ReqPhoneOtpRequest = { phoneNumber: state.phoneNumber };
    fetchPhoneOtpRequest(payload);
  };

  const handleClose = () => {
    fetchChangePhoneOtp(OTPStatus.none);
  };

  return (
    <ModalOtpRequestView
      disabledSendCode={state.disabledSendCode}
      phoneNumber={state.phoneNumber}
      show={show}
      onClose={handleClose}
      onOk={handleOk}
      onChangePhoneNumber={handleChangePhoneNumber}
    />
  );
};

export default ModalOtpRequestContainer;
