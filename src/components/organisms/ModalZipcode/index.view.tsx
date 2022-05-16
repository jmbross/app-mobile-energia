import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalZipcodeViewProps } from './index.types';
import { Description } from './index.styles';

const ModalZipcodeView = ({ show, onClose, onOk, onCancel, zipcode }: IModalZipcodeViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      show={show}
      title={t('screens.enrollment.locationSetupScreen.modalZipcode.title')}
      onOk={onOk}
      onClose={onClose}
      textOk={t('screens.enrollment.locationSetupScreen.modalZipcode.ok')}
      onCancel={onCancel}
      textCancel={t('screens.enrollment.locationSetupScreen.modalZipcode.cancel')}
    >
      <Description>{t('screens.enrollment.locationSetupScreen.modalZipcode.description', { zipcode })}</Description>
    </Modal>
  );
};

export default ModalZipcodeView;
