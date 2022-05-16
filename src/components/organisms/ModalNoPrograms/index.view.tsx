import React from 'react';
import { IModalNoProgramsViewProps } from './index.types';
import { Description } from './index.styles';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';

const ModalNoProgramsView = ({ show, onOk, utility }: IModalNoProgramsViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      show={show}
      title={t('screens.enrollment.modalNoPrograms.title')}
      onOk={onOk}
      textOk={t('screens.enrollment.modalNoPrograms.ok')}
    >
      <Description>
        {utility
          ? t('screens.enrollment.modalNoPrograms.description', { utility })
          : t('screens.enrollment.modalNoPrograms.descriptionNoUtility')}
      </Description>
    </Modal>
  );
};

export default ModalNoProgramsView;
