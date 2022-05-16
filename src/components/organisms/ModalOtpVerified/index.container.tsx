import React from 'react';
import { useSetting, useTemporary } from '@/hooks/index';
import { OTPStatus } from '@/types/setting';
import { IModalOtpVerifiedProps } from './index.types';
import ModalOtpVerifiedView from './index.view';

const ModalOtpVerifiedContainer = ({ show }: IModalOtpVerifiedProps) => {
  const { fetchChangePhoneOtp } = useSetting();
  const { fetchChangePhoneNumber } = useTemporary();

  const handleClose = () => {
    fetchChangePhoneOtp(OTPStatus.none);
    fetchChangePhoneNumber('');
  };

  return <ModalOtpVerifiedView show={show} onClose={handleClose} onOk={handleClose} />;
};

export default ModalOtpVerifiedContainer;
