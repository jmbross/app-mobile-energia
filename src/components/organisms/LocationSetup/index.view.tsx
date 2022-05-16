import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '@/assets/styles';
import Checkbox from '@/atoms/Checkbox';
import InputText from '@/molecules/InputText';
import { ILocationSetupViewProps } from './index.types';

const LocationSetupView = ({
  isBusiness,
  zipCode,
  siteName,
  onChangeBusiness,
  onChangeZipcode,
  onChangeSiteName,
}: ILocationSetupViewProps) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Checkbox
        items={[{ id: 1, name: 1, text: t('screens.enrollment.locationSetupScreen.business') }]}
        values={[isBusiness ? 1 : 0]}
        onChange={onChangeBusiness}
      />
      <InputText
        type="text"
        border="underline"
        placeholder={t('common.validations.zipCode.placeholder')}
        value={zipCode}
        fontSize={theme.typography.body.fontSize}
        marginTop={50}
        maxLength={5}
        onChangeText={onChangeZipcode}
      />
      <InputText
        type="text"
        border="underline"
        placeholder={
          isBusiness
            ? t('common.validations.businessNickname.placeholder')
            : t('common.validations.homeNickname.placeholder')
        }
        value={siteName}
        fontSize={theme.typography.body.fontSize}
        marginTop={50}
        onChangeText={onChangeSiteName}
      />
    </div>
  );
};

export default LocationSetupView;
