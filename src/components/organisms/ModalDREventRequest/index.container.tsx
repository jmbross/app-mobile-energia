import React, { useState } from 'react';
import ModalDREventRequestView from './index.view';
import { IModalDREventRequestProps } from './index.types';

const ModalDREventRequestContainer = ({ show, onClose, onOk, onCancel }: IModalDREventRequestProps) => {
  const [state, setState] = useState({ answer: 'UNAVAIL', other: '' });

  const handleChangeRadio = (answer: string) => {
    if (state.answer === answer) {
      return;
    }

    setState({ ...state, answer, other: '' });
  };

  const handleChangeText = (text: string) => {
    setState({ ...state, other: text });
  };

  const handleOK = () => {
    onOk(state.answer, state.other);
  };

  return (
    <ModalDREventRequestView
      show={show}
      onClose={onClose}
      onOk={handleOK}
      onCancel={onCancel}
      onChangeRadio={handleChangeRadio}
      onChangeText={handleChangeText}
      answer={state.answer}
      other={state.other}
    />
  );
};

export default ModalDREventRequestContainer;
