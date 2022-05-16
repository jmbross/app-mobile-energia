import React from 'react';
import { useTranslation } from 'react-i18next';
import Verification from '@/organisms/Verification';
import ModalVerification from '@/organisms/ModalVerification';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IVerificationScreenViewProps } from './index.types';

const VerificationScreenView = ({
  enrollmentProgram,
  disabledNext,
  onNext,
  onNoThanks,
  modalVerification,
  modalVerificationClose,
  modalVerificationOk,
  modalVerificationCancel,
}: IVerificationScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline
        navigationPath={t('screens.enrollment.verificationScreen.title', { program: enrollmentProgram.program })}
        navigationIcon={enrollmentProgram.logoLarge}
        onNext={onNext}
        textNext={t('common.generalButtons.next')}
        onOther={onNoThanks}
        textOther={t('common.generalButtons.noThanks')}
      >
        <Verification />
      </EnrollmentTemplate>
      <ModalVerification
        show={modalVerification}
        onClose={modalVerificationClose}
        onOk={modalVerificationOk}
        onCancel={modalVerificationCancel}
      />
    </AuthTemplate>
  );
};

export default VerificationScreenView;
