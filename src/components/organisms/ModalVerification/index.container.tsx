import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import ModalVerificationView from './index.view';
import { IModalVerificationProps } from './index.types';

const ModalVerificationContainer = ({ show, onClose, onOk, onCancel }: IModalVerificationProps) => {
  const {
    enrollment: {
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  return (
    <ModalVerificationView
      show={show}
      onClose={onClose}
      onOk={onOk}
      onCancel={onCancel}
      programName={currentProgram.program}
    />
  );
};

export default ModalVerificationContainer;
