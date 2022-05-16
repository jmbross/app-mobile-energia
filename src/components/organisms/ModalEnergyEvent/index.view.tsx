import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalEnergyEventViewProps } from './index.types';
import { Title, Description } from './index.styles';

const ModalEnergyEventView = ({ show, onClose }: IModalEnergyEventViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal show={show} onClose={onClose}>
      <Title>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.modalEnergyEvent.title')}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.modalEnergyEvent.description'),
        }}
      />
    </Modal>
  );
};

export default ModalEnergyEventView;
