import React from 'react';
import { useTranslation } from 'react-i18next';
import SingleSurvey from '@/organisms/SingleSurvey';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { ISingleSurveyScreenViewProps } from './index.types';

const SingleSurveyScreenView = ({ enrollmentProgram, disabledNext, onNext, onSkip }: ISingleSurveyScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline={false}
        navigationIcon={enrollmentProgram.logoLarge}
        onNext={onNext}
        textNext={t('common.generalButtons.submit')}
        onOther={onSkip}
        textOther={t('common.generalButtons.skip')}
      >
        <SingleSurvey />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default SingleSurveyScreenView;
