import React from 'react';
import { useSelector } from 'react-redux';
import useEnrollment from '@/hooks/useEnrollment';
import { RootState } from '@/stores/index';
import AccountVerificationView from './index.view';

const AccountVerificationContainer = () => {
  const {
    enrollment: {
      enrollmentInfo: {
        serviceFirstName,
        serviceLastName,
        serviceAccountNumber,
        serviceAddress,
        serviceCity,
        serviceZip,
        serviceEmail,
        servicePhone,
        utility,
      },
    },
  } = useSelector((state: RootState) => state);

  const {
    fetchServiceFirstName,
    fetchServiceLastName,
    fetchServiceAccountNumber,
    fetchServiceAddress,
    fetchServiceCity,
    fetchServiceZip,
    fetchServicePhone,
    fetchServiceEmail,
  } = useEnrollment();

  const handleFirstName = (value: string) => {
    fetchServiceFirstName(value);
  };

  const handleLastName = (value: string) => {
    fetchServiceLastName(value);
  };

  const handleServiceAccountNumber = (value: string) => {
    fetchServiceAccountNumber(value);
  };

  const handleServiceAddress = (value: string) => {
    fetchServiceAddress(value);
  };

  const handleServiceCity = (value: string) => {
    fetchServiceCity(value);
  };

  const handleServiceZip = (value: string) => {
    fetchServiceZip(value);
  };

  const handleServicePhone = (value: string) => {
    fetchServicePhone(value);
  };

  const handleServiceEmail = (value: string) => {
    fetchServiceEmail(value);
  };

  return (
    <AccountVerificationView
      firstName={serviceFirstName}
      lastName={serviceLastName}
      serviceAccountNumber={serviceAccountNumber}
      serviceAddress={serviceAddress}
      serviceCity={serviceCity}
      serviceZip={serviceZip}
      serviceEmail={serviceEmail}
      servicePhone={servicePhone}
      onFirstName={handleFirstName}
      onLastName={handleLastName}
      onServiceAccountNumber={handleServiceAccountNumber}
      onServiceAddress={handleServiceAddress}
      onServiceCity={handleServiceCity}
      onServiceZip={handleServiceZip}
      onServicePhone={handleServicePhone}
      onServiceEmail={handleServiceEmail}
      utility={utility}
    />
  );
};

export default AccountVerificationContainer;
