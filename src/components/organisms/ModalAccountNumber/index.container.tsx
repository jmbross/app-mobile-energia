import React from 'react';
import ModalAccountNumberView from './index.view';
import { IModalAccountNumberProps } from './index.types';

const ModalAccountNumberContainer = ({ show, onClose, onOk }: IModalAccountNumberProps) => {
  return <ModalAccountNumberView show={show} onClose={onClose} onOk={onOk} />;
};

export default ModalAccountNumberContainer;
