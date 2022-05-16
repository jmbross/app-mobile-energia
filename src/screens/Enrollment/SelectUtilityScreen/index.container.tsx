import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PATHS from '@/types/navigationPaths';
import { RootState } from '@/stores/index';
import { useEnrollment } from '@/hooks/index';
import SelectUtilityScreenView from './index.view';

const SelectUtilityScreenContainer = () => {
  const {
    enrollment: {
      enrollmentInfo: { utility },
      utilityPrograms,
    },
  } = useSelector((state: RootState) => state);

  const navigate = useNavigate();
  const { fetchChangePrograms } = useEnrollment();
  const [modal, setModal] = useState({ noPrograms: false });

  const handleNext = () => {
    const programs = utilityPrograms[utility];
    fetchChangePrograms(programs);
    if (programs.length > 0) {
      navigate(PATHS.SCREEN_ENROLLMENT_ACCOUNT_VERIFICATION);
    } else {
      setModal({ noPrograms: true });
    }
  };

  const handleNoProgramsOk = () => {
    setModal({ noPrograms: false });
  };

  return (
    <SelectUtilityScreenView
      disabledNext={!utility || !utilityPrograms[utility]}
      onNext={handleNext}
      modalNoPrograms={modal.noPrograms}
      modalNoProgramsOk={handleNoProgramsOk}
      utility={utility}
    />
  );
};

export default SelectUtilityScreenContainer;
