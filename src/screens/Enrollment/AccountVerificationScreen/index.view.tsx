import React from 'react';
import { useTranslation } from 'react-i18next';
import AccountVerification from '@/organisms/AccountVerification';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IAccountVerificationProps } from './index.types';

const AccountVerificationSCEView = ({ disabledNext, onNext }: IAccountVerificationProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline
        navigationPath={t('screens.enrollment.accountVerification.title')}
        onNext={onNext}
        textNext={t('common.generalButtons.next')}
      >
        <AccountVerification />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default AccountVerificationSCEView;
