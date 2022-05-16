import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import { useSetting, useTemporary } from '@/hooks/index';
import { OTPStatus } from '@/types/setting';
import { IModalOtpErrorProps } from './index.types';
import ModalOtpErrorView from './index.view';

const ModalOtpErrorContainer = ({ show }: IModalOtpErrorProps) => {
  const {
    setting: { phoneStatus },
  } = useSelector((state: RootState) => state);

  const { fetchChangePhoneOtp } = useSetting();
  const { fetchChangePhoneNumber } = useTemporary();

  const handleClose = () => {
    fetchChangePhoneOtp(OTPStatus.none);
  };

  const handleRetry = () => {
    if (phoneStatus === OTPStatus.error) {
      fetchChangePhoneOtp(OTPStatus.request);
      fetchChangePhoneNumber('');
    } else if (phoneStatus === OTPStatus.notVerified) {
      fetchChangePhoneOtp(OTPStatus.verification);
    }
  };

  const handleRequest = () => {
    fetchChangePhoneOtp(OTPStatus.request);
    fetchChangePhoneNumber('');
  };

  return <ModalOtpErrorView show={show} onClose={handleClose} onOk={handleRetry} onCancel={handleRequest} />;
};

export default ModalOtpErrorContainer;
