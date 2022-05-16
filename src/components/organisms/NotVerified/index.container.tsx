import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import NotVerifiedView from './index.view';

const NotVerifiedContainer = () => {
  const {
    enrollment: {
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  return <NotVerifiedView programName={currentProgram.program.toLowerCase()} />;
};

export default NotVerifiedContainer;
