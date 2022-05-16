import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import ModalProgramInformationView from './index.view';
import { IModalProgramInformationProps } from './index.types';

const ModalProgramInformationContainer = ({ programName, show, onClose }: IModalProgramInformationProps) => {
  const {
    main: { currentSite },
  } = useSelector((state: RootState) => state);

  return (
    <ModalProgramInformationView
      programName={programName?.toLowerCase() || currentSite?.program.toLowerCase()}
      show={show}
      onClose={onClose}
    />
  );
};

export default ModalProgramInformationContainer;
