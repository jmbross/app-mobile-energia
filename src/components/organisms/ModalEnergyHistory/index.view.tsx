import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalEnergyHistoryViewProps } from './index.types';
import { Title, Description } from './index.styles';

const ModalEnergyHistoryView = ({ show, onClose }: IModalEnergyHistoryViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal show={show} onClose={onClose}>
      <Title>{t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.modalEnergyHistory.title')}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.modalEnergyHistory.description'),
        }}
      />
    </Modal>
  );
};

export default ModalEnergyHistoryView;
