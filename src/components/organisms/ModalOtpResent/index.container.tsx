import React from 'react';
import { useSetting } from '@/hooks/index';
import { OTPStatus } from '@/types/setting';
import { IModalOtpResentProps } from './index.types';
import ModalOtpResentView from './index.view';

const ModalOtpResentContainer = ({ show }: IModalOtpResentProps) => {
  const { fetchChangePhoneOtp } = useSetting();

  const handleClose = () => {
    fetchChangePhoneOtp(OTPStatus.verification);
  };

  return <ModalOtpResentView show={show} onClose={handleClose} onOk={handleClose} />;
};

export default ModalOtpResentContainer;
