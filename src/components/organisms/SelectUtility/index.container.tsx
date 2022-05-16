import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import SelectUtilityView from './index.view';

const SelectUtilityContainer = () => {
  const {
    enrollment: {
      utilityPrograms,
      enrollmentInfo: { utility },
    },
  } = useSelector((state: RootState) => state);

  const { fetchUtility } = useEnrollment();

  const handleChangeUtility = (value: string) => {
    fetchUtility(value);
  };

  return (
    <SelectUtilityView
      utilities={Object.keys(utilityPrograms ?? {})}
      selectedUtility={utility}
      onChangeUtility={handleChangeUtility}
    />
  );
};

export default SelectUtilityContainer;
