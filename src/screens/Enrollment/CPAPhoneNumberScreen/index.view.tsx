import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets/styles';
import CPAPhoneNumber from '@/organisms/CPAPhoneNumber';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import PATHS from '@/types/navigationPaths';

const CPAPhoneNumberScreenView = () => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={false}
        navigationIcon={images.logoCPA.image}
        onNext={() => {
          window.location.href = PATHS.SCREEN_ENROLLMENT_CPA_PROGRAM_LIST;
        }}
        textNext={t('common.generalButtons.next')}
        onOther={() => {
          window.location.href = PATHS.SCREEN_ENROLLMENT_CPA_PROGRAM_LIST;
        }}
        textOther={t('common.generalButtons.skip')}
      >
        <CPAPhoneNumber />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default CPAPhoneNumberScreenView;
