import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalVerificationViewProps } from './index.types';
import { Description } from './index.styles';

const ModalVerificationView = ({ show, onClose, onOk, onCancel, programName }: IModalVerificationViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      show={show}
      title={t('screens.enrollment.verificationScreen.modalVerification.title')}
      onClose={onClose}
      onOk={onOk}
      textOk={t('screens.enrollment.verificationScreen.modalVerification.ok')}
      onCancel={onCancel}
      textCancel={t('screens.enrollment.verificationScreen.modalVerification.cancel')}
    >
      <Description>
        {t('screens.enrollment.verificationScreen.modalVerification.description', { program: programName })}
      </Description>
    </Modal>
  );
};

export default ModalVerificationView;
