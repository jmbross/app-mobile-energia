import React from 'react';
import { useTranslation } from 'react-i18next';
import FindProgram from '@/organisms/FindProgram';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IFindProgramScreenViewProps } from './index.types';

const FindProgramScreenView = ({ onNext }: IFindProgramScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={false}
        navigationPath={t('screens.enrollment.findProgramScreen.title')}
        onNext={onNext}
        textNext={t('common.generalButtons.next')}
      >
        <FindProgram />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default FindProgramScreenView;
