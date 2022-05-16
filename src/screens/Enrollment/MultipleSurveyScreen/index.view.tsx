import React from 'react';
import { useTranslation } from 'react-i18next';
import MultipleSurvey from '@/organisms/MultipleSurvey';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import AuthTemplate from '@/templates/AuthTemplate';
import { IMultipleSurveyScreenViewProps } from './index.types';

const MultipleSurveyScreenView = ({
  enrollmentProgram,
  disabledNext,
  onNext,
  onNoThanks,
}: IMultipleSurveyScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline={false}
        navigationIcon={enrollmentProgram.logoLarge}
        onNext={onNext}
        textNext={t('common.generalButtons.submit')}
        onOther={onNoThanks}
        textOther={t('common.generalButtons.skip')}
      >
        <MultipleSurvey />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default MultipleSurveyScreenView;
