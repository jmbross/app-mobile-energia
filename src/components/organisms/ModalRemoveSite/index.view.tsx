import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalRemoveSiteViewProps } from './index.types';
import { Description } from './index.styles';

const ModalRemoveSiteView = ({ show, onClose, onOk, onCancel }: IModalRemoveSiteViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      title={t('screens.main.settings.mySites.mySiteDetailScreen.modalRemoveSite.title')}
      show={show}
      onClose={onClose}
      onOk={onOk}
      textOk={t('screens.main.settings.mySites.mySiteDetailScreen.modalRemoveSite.ok')}
      onCancel={onCancel}
      textCancel={t('screens.main.settings.mySites.mySiteDetailScreen.modalRemoveSite.cancel')}
    >
      <Description>{t('screens.main.settings.mySites.mySiteDetailScreen.modalRemoveSite.description')}</Description>
    </Modal>
  );
};

export default ModalRemoveSiteView;
