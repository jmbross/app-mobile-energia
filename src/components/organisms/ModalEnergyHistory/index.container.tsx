import React from 'react';
import ModalEnergyHistoryView from './index.view';
import { IModalEnergyHistoryProps } from './index.types';

const ModalEnergyHistoryContainer = ({ show, onClose }: IModalEnergyHistoryProps) => {
  return <ModalEnergyHistoryView show={show} onClose={onClose} />;
};

export default ModalEnergyHistoryContainer;
