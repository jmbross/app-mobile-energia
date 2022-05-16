import React from 'react';
import ModalEnergyEventView from './index.view';
import { IModalEnergyEventProps } from './index.types';

const ModalEnergyEventContainer = ({ show, onClose }: IModalEnergyEventProps) => {
  return <ModalEnergyEventView show={show} onClose={onClose} />;
};

export default ModalEnergyEventContainer;
