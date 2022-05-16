import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/stores/index';
import useEnrollment from '@/hooks/useEnrollment';
import VerificationView from './index.view';

const VerificationContainer = () => {
  const {
    auth: { userInfo },
    enrollment: {
      enrollmentInfo,
      programs: { currentProgram },
    },
  } = useSelector((state: RootState) => state);

  const [modal, setModal] = useState({ accountNumber: false });

  const { fetchIsBusiness, fetchVerificationName, fetchVerificationAccountNumber } = useEnrollment();

  useEffect(() => {
    fetchIsBusiness(userInfo.isLocationBusiness);
  }, []);

  const handleClickAccountNumber = () => {
    setModal({ ...modal, accountNumber: true });
  };

  const handleChangeName = (value: string) => {
    fetchVerificationName(value);
  };

  const handleChangeAccountNumber = (value: string) => {
    fetchVerificationAccountNumber(value);
  };

  const handleModalAccountNumberClose = () => {
    setModal({ ...modal, accountNumber: false });
  };

  const handleModalAccountNumberOk = () => {
    setModal({ ...modal, accountNumber: false });
  };

  return (
    <VerificationView
      programName={currentProgram.program.toLowerCase()}
      isBusiness={enrollmentInfo.isBusiness}
      accountName={enrollmentInfo.verificationName}
      accountNumber={enrollmentInfo.verificationAccountNumber}
      accountMinLength={currentProgram.accountMinLength}
      accountMaxLength={currentProgram.accountMaxLength}
      onClickAccountNumber={handleClickAccountNumber}
      onChangeName={handleChangeName}
      onChangeAccountNumber={handleChangeAccountNumber}
      modalAccountNumber={modal.accountNumber}
      modalAccountNumberClose={handleModalAccountNumberClose}
      modalAccountNumberOk={handleModalAccountNumberOk}
    />
  );
};

export default VerificationContainer;
