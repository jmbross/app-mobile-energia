import React from 'react';
import ModalRewardView from './index.view';
import { IModalRewardProps } from './index.types';

const ModalRewardContainer = ({ show, onClose }: IModalRewardProps) => {
  return <ModalRewardView show={show} onClose={onClose} />;
};

export default ModalRewardContainer;
