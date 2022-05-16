import React from 'react';
import ModalRemoveSiteView from './index.view';
import { IModalRemoveSiteProps } from './index.types';

const ModalRemoveSiteContainer = ({ show, onClose, onOk, onCancel }: IModalRemoveSiteProps) => {
  return <ModalRemoveSiteView show={show} onClose={onClose} onOk={onOk} onCancel={onCancel} />;
};

export default ModalRemoveSiteContainer;
