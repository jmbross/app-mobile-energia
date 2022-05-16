import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalEnvironmentalImpactViewProps } from './index.types';
import { Title, Description } from './index.styles';

const ModalEnvironmentalImpactView = ({ show, onClose }: IModalEnvironmentalImpactViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal show={show} showClose onClose={onClose}>
      <Title>{t('screens.main.dashboard.dashboardScreen.environmentalImpact.modalEnvironmentalImpact.title')}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: t('screens.main.dashboard.dashboardScreen.environmentalImpact.modalEnvironmentalImpact.description'),
        }}
      />
    </Modal>
  );
};

export default ModalEnvironmentalImpactView;
