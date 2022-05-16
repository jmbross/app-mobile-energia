import React from 'react';
import { useTranslation } from 'react-i18next';
import AvailableProgram from '@/organisms/AvailableProgram';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IAvailableProgramScreenViewProps } from './index.types';

const AvailableProgramScreenView = ({
  enrollmentProgram,
  disabledNext,
  onNext,
  onNoThanks,
  isNoThanks,
}: IAvailableProgramScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        navigationIcon={enrollmentProgram.logoLarge}
        textNext={t('common.generalButtons.next')}
        onNext={onNext}
        onOther={isNoThanks ? onNoThanks : undefined}
        textOther={isNoThanks ? t('common.generalButtons.noThanks') : undefined}
        showBoxShadow={false}
        wrapperMargin="0px 300px"
        wrapperMaxWidth="none"
        appLogin={false}
        buttonsContainerPadding="0 60px"
      >
        <AvailableProgram />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default AvailableProgramScreenView;
