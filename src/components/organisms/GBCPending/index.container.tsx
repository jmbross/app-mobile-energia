import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import GBCPendingView from './index.view';

const GBCPendingContainer = () => {
  const {
    auth: {
      userInfo: { email },
    },
    enrollment: {
      enrollmentInfo: { program },
    },
  } = useSelector((state: RootState) => state);

  const handleEmail = (subject: string, body: string) => {
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  const handleSms = () => {
    console.log('sms');
  };

  return <GBCPendingView email={email} programName={program.toLowerCase()} onEmail={handleEmail} onSms={handleSms} />;
};

export default GBCPendingContainer;
