import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useEnrollment from '@/hooks/useEnrollment';
import { RootState } from '@/stores/index';
import ProfileSetupView from './index.view';

const ProfileSetupContainer = () => {
  const {
    auth: { userInfo },
    enrollment: { enrollmentInfo },
  } = useSelector((state: RootState) => state);

  const { fetchFirstName, fetchLastName } = useEnrollment();

  useEffect(() => {
    fetchFirstName(userInfo.firstName);
    fetchLastName(userInfo.lastName);
  }, []);

  const handleFirstName = (value: string) => {
    fetchFirstName(value);
  };

  const handleLastName = (value: string) => {
    fetchLastName(value);
  };

  return (
    <ProfileSetupView
      firstName={enrollmentInfo.firstName}
      lastName={enrollmentInfo.lastName}
      onFirstName={handleFirstName}
      onLastName={handleLastName}
    />
  );
};

export default ProfileSetupContainer;
