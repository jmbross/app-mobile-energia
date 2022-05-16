import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalOtpVerifiedViewProps } from './index.types';

const ModalOtpVerifiedView = ({ show, onClose, onOk }: IModalOtpVerifiedViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      title={t('screens.main.settings.account.accountScreen.modalOTPVerified.title')}
      show={show}
      onClose={onClose}
      onOk={onOk}
      textOk={t('screens.main.settings.account.accountScreen.modalOTPVerified.ok')}
    >
      <div />
    </Modal>
  );
};

export default ModalOtpVerifiedView;
