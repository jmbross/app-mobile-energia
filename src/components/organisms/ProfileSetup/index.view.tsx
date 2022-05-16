import React from 'react';
import { useTranslation } from 'react-i18next';
import InputText from '@/molecules/InputText';
import { theme } from '@/assets/styles';
import { IProfileSetupViewProps } from './index.types';

const ProfileSetupView = ({ firstName, lastName, onFirstName, onLastName }: IProfileSetupViewProps) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <InputText
        type="text"
        placeholder={t('common.validations.firstName.placeholder')}
        value={firstName}
        border="underline"
        fontSize={theme.typography.body.fontSize}
        onChangeText={onFirstName}
      />
      <InputText
        type="text"
        placeholder={t('common.validations.lastName.placeholder')}
        value={lastName}
        border="underline"
        fontSize={theme.typography.body.fontSize}
        marginTop={50}
        onChangeText={onLastName}
      />
    </div>
  );
};

export default ProfileSetupView;
