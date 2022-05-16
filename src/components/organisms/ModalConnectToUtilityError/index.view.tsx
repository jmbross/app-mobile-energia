import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalConnectToUtilityErrorViewProps } from './index.types';
import { Description } from './index.styles';

const ModalConnectToUtilityErrorView = ({ error, show, onOk }: IModalConnectToUtilityErrorViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal show={show} onOk={onOk} textOk={t('common.generalButtons.ok')}>
      <Description>{error}</Description>
    </Modal>
  );
};

export default ModalConnectToUtilityErrorView;
