import React from 'react';
import { useTranslation } from 'react-i18next';
import StartRegister from '@/organisms/StartRegister';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IStartRegisterViewProps } from './index.types';

const StartRegisterView = ({ onNext }: IStartRegisterViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={false}
        underline={false}
        navigationPath={t('screens.enrollment.startRegisterScreen.title')}
        onNext={onNext}
        textNext={t('common.generalButtons.next')}
      >
        <StartRegister />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default StartRegisterView;
