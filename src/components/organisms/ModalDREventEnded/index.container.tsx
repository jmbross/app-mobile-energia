import React, { useState } from 'react';
import ModalOptOutView from './index.view';
import { IModalOptOutProps } from './index.types';

const ModalOptOutContainer = ({ show, onClose, onOk, onCancel }: IModalOptOutProps) => {
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
    <ModalOptOutView
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

export default ModalOptOutContainer;
