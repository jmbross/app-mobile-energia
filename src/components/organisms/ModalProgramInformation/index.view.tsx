import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import { IModalProgramInformationViewProps } from './index.types';
import { Description, More } from './index.styles';

const ModalProgramInformationView = ({ programName, show, onClose }: IModalProgramInformationViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal show={show} showClose onClose={onClose}>
      <Description
        dangerouslySetInnerHTML={{ __html: t(`programs.${programName}.availableProgramScreen.description`) }}
      />
      <More dangerouslySetInnerHTML={{ __html: t(`programs.${programName}.availableProgramScreen.more`) }} />
    </Modal>
  );
};

export default ModalProgramInformationView;
