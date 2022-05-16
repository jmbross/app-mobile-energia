import React from 'react';
import ModalConnectToUtilityErrorView from './index.view';
import { IModalConnectToUtilityErrorProps } from './index.types';

const ModalConnectToUtilityErrorContainer = ({ error, show, onOk }: IModalConnectToUtilityErrorProps) => {
  return <ModalConnectToUtilityErrorView error={error} show={show} onOk={onOk} />;
};

export default ModalConnectToUtilityErrorContainer;
