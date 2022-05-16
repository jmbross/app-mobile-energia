import React from 'react';
import { useTranslation } from 'react-i18next';
import ConnectToUtility from '@/organisms/ConnectToUtility';
import ModalConnectToUtilityError from '@/organisms/ModalConnectToUtilityError';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IConnectToUtilityScreenViewProps } from './index.types';

const ConnectToUtilityScreenView = ({
  enrollmentProgram,
  disabledNext,
  onNext,
  onNoThanks,
  later,
  modalConnectToUtilityError,
  modalConnectToUtilityErrorTitle,
  modalConnectToUtilityErrorOK,
}: IConnectToUtilityScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline
        navigationIcon={enrollmentProgram.logoLarge}
        navigationPath={t('screens.enrollment.connectToUtilityScreen.title')}
        onNext={onNext}
        textNext={t('common.generalButtons.continue')}
        textOther={later ? t('screens.enrollment.connectToUtilityScreen.later') : ''}
        onOther={onNoThanks}
      >
        <ConnectToUtility />
      </EnrollmentTemplate>
      <ModalConnectToUtilityError
        show={modalConnectToUtilityError}
        error={modalConnectToUtilityErrorTitle}
        onOk={modalConnectToUtilityErrorOK}
      />
    </AuthTemplate>
  );
};

export default ConnectToUtilityScreenView;
