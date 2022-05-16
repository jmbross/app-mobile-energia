import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalOtpErrorViewProps } from './index.types';

const ModalOtpErrorView = ({ show, onClose, onOk, onCancel }: IModalOtpErrorViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      title={t('screens.main.settings.account.accountScreen.modalOTPError.title')}
      show={show}
      onClose={onClose}
      onOk={onOk}
      textOk={t('screens.main.settings.account.accountScreen.modalOTPError.ok')}
      onCancel={onCancel}
      textCancel={t('screens.main.settings.account.accountScreen.modalOTPError.cancel')}
    >
      <div />
    </Modal>
  );
};

export default ModalOtpErrorView;
