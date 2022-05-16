import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import ProgramInformationView from './index.view';

const ProgramInformationContainer = () => {
  const {
    main: { currentSite },
  } = useSelector((state: RootState) => state);

  const [modal, setModal] = useState({ programInformation: false });

  return (
    <ProgramInformationView
      programName={currentSite?.program.toLowerCase()}
      modalProgramInformation={modal.programInformation}
      modalProgramInformationClose={() => setModal({ ...modal, programInformation: false })}
      onHelp={() => setModal({ ...modal, programInformation: true })}
    />
  );
};

export default ProgramInformationContainer;
