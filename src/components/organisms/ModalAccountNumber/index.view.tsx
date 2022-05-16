import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalAccountNumberViewProps } from './index.types';
import { Description } from './index.styles';

const ModalAccountNumberView = ({ show, onClose, onOk }: IModalAccountNumberViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      show={show}
      title={t('programs.scp.verificationScreen.modalAccountNumber.title')}
      onClose={onClose}
      onOk={onOk}
      textOk={t('programs.scp.verificationScreen.modalAccountNumber.ok')}
    >
      <Description>{t('programs.scp.verificationScreen.modalAccountNumber.description')}</Description>
    </Modal>
  );
};

export default ModalAccountNumberView;
