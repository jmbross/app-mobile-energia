import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import ModalZipcodeView from './index.view';
import { IModalZipcodeProps } from './index.types';

const ModalZipcodeContainer = ({ show, onClose, onOk, onCancel }: IModalZipcodeProps) => {
  const { enrollment } = useSelector((state: RootState) => state);

  return (
    <ModalZipcodeView
      show={show}
      onClose={onClose}
      onOk={onOk}
      onCancel={onCancel}
      zipcode={enrollment.enrollmentInfo.zipCode}
    />
  );
};

export default ModalZipcodeContainer;
