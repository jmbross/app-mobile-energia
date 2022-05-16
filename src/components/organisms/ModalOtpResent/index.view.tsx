import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalOtpResentViewProps } from './index.types';

const ModalOtpResentView = ({ show, onClose, onOk }: IModalOtpResentViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      title={t('screens.main.settings.account.accountScreen.modalOTPResent.title')}
      show={show}
      onClose={onClose}
      onOk={onOk}
      textOk={t('screens.main.settings.account.accountScreen.modalOTPResent.ok')}
    >
      <div />
    </Modal>
  );
};

export default ModalOtpResentView;
