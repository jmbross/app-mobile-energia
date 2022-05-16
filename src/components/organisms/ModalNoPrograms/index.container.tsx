import React from 'react';
import { IModalNoProgramsViewProps } from './index.types';
import ModalNoProgramsView from './index.view';

const ModalNoProgramsContainer = ({ show, onOk, utility }: IModalNoProgramsViewProps) => {
  return <ModalNoProgramsView show={show} onOk={onOk} utility={utility} />;
};

export default ModalNoProgramsContainer;
