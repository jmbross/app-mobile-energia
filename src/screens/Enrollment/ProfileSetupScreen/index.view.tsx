import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileSetup from '@/organisms/ProfileSetup';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IProfileScreenViewProps } from './index.types';

const ProfileSetupScreenView = ({ disabledNext, onNext }: IProfileScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline
        navigationPath={t('screens.enrollment.profileSetupScreen.title')}
        onNext={onNext}
        textNext={t('common.generalButtons.next')}
      >
        <ProfileSetup />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default ProfileSetupScreenView;
