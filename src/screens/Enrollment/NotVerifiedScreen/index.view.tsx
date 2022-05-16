import React from 'react';
import { useTranslation } from 'react-i18next';
import NotVerified from '@/organisms/NotVerified';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { INotVerifiedScreenViewProps } from './index.types';

const NotVerifiedScreenView = ({ enrollmentProgram, onTryAgain, onNoThanks }: INotVerifiedScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={false}
        underline={false}
        navigationPath={t('screens.enrollment.notVerifiedScreen.title', { program: enrollmentProgram.program })}
        navigationIcon={enrollmentProgram.logoLarge}
        onNext={onTryAgain}
        textNext={t('common.generalButtons.tryAgain')}
        onOther={onNoThanks}
        textOther={t('common.generalButtons.noThanks')}
      >
        <NotVerified />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default NotVerifiedScreenView;
