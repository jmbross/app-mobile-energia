import React from 'react';
import { useTranslation } from 'react-i18next';
import WebStore from '@/organisms/WebStore';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { IWebStoreScreenViewProps } from './index.types';

const WebStoreScreenView = ({ enrollmentProgram, onNoThanks }: IWebStoreScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled
        navigationIcon={enrollmentProgram.logoLarge}
        navigationPath={t('programs.scp.webStoreScreen.title')}
        onOther={onNoThanks}
        textOther={t('common.generalButtons.noThanks')}
      >
        <WebStore />
      </EnrollmentTemplate>
    </AuthTemplate>
  );
};

export default WebStoreScreenView;
