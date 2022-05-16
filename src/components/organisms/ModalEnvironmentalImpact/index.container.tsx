import React from 'react';
import ModalEnvironmentalImpactView from './index.view';
import { IModalEnvironmentalImpactProps } from './index.types';

const ModalEnvironmentalImpactContainer = ({ show, onClose }: IModalEnvironmentalImpactProps) => {
  return <ModalEnvironmentalImpactView show={show} onClose={onClose} />;
};

export default ModalEnvironmentalImpactContainer;
