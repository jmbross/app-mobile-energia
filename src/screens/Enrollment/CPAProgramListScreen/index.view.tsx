import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets/styles';
import CPAProgramList from '@/organisms/CPAProgramList';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import PATHS from '@/types/navigationPaths';

const CPAProgramListScreenView = () => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={false}
        underline
        navigationIcon={images.logoCPA.image}
        navigationPath={t('screens.enrollment.programListScreen.title', { program: 'CPA' })}
        onNext={() => {
          window.location.href = PATHS.SCREEN_ENROLLMENT_CONNECT_TO_UTILITY;
        }}
        textNext={t('common.generalButtons.next')}
        onOther={() => {
          window.location.href = PATHS.SCREEN_ENROLLMENT_AVAILABLE_PROGRAM;
        }}
        textOther={t('common.generalButtons.noThanks')}
      >
        <CPAProgramList />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default CPAProgramListScreenView;
