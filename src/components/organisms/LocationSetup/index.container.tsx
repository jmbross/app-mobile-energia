import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import LocationSetupView from './index.view';

const LocationSetupContainer = () => {
  const {
    auth: { userInfo },
    enrollment: { enrollmentInfo },
  } = useSelector((state: RootState) => state);

  const { fetchIsBusiness, fetchZipcode, fetchSiteName } = useEnrollment();

  useEffect(() => {
    fetchIsBusiness(userInfo.isLocationBusiness);
    fetchZipcode(userInfo.zipcode);
    fetchSiteName(userInfo.siteName);
  }, []);

  const handleChangeBusiness = () => {
    fetchIsBusiness(!enrollmentInfo.isBusiness);
  };

  const handleChangeZipcode = (value: string) => {
    fetchZipcode(value);
  };

  const handleChangeSiteName = (value: string) => {
    fetchSiteName(value);
  };

  return (
    <LocationSetupView
      isBusiness={enrollmentInfo.isBusiness}
      zipCode={enrollmentInfo.zipCode}
      siteName={enrollmentInfo.siteName}
      onChangeBusiness={handleChangeBusiness}
      onChangeZipcode={handleChangeZipcode}
      onChangeSiteName={handleChangeSiteName}
    />
  );
};

export default LocationSetupContainer;
