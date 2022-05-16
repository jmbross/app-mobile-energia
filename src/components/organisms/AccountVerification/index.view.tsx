import React from 'react';
import { useTranslation } from 'react-i18next';
import InputText from '@/molecules/InputText';
import { theme } from '@/assets/styles';
import { IAccountVerificationProps, Utilities } from './index.types';

import { Description, SecondDescription, SmallDescription, Container } from './index.styles';

const AccountVerificationView = ({
  firstName,
  lastName,
  serviceAccountNumber,
  serviceAddress,
  serviceCity,
  serviceZip,
  servicePhone,
  serviceEmail,
  onFirstName,
  onLastName,
  onServiceAccountNumber,
  onServiceAddress,
  onServiceCity,
  onServiceZip,
  onServicePhone,
  onServiceEmail,
  utility,
}: IAccountVerificationProps) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Description>{t('screens.enrollment.accountVerification.description')}</Description>
      {utility === Utilities.PGE && (
        <SecondDescription>{t('screens.enrollment.accountVerification.pgeDescription')}</SecondDescription>
      )}
      <InputText
        marginTop={50}
        type="text"
        placeholder={t('common.validations.serviceFirstName.placeholder')}
        value={firstName}
        border="underline"
        fontSize={theme.typography.body.fontSize}
        onChangeText={onFirstName}
      />
      <InputText
        type="text"
        placeholder={t('common.validations.serviceLastName.placeholder')}
        value={lastName}
        border="underline"
        fontSize={theme.typography.body.fontSize}
        marginTop={50}
        onChangeText={onLastName}
      />
      {utility === Utilities.PGE && (
        <SecondDescription>{t('screens.enrollment.accountVerification.pgeAdditionalDescription')}</SecondDescription>
      )}
      {utility === Utilities.PGE ? (
        <Container>
          <InputText
            type="text"
            placeholder={t('common.validations.servicePhone.placeholder')}
            value={servicePhone}
            border="underline"
            fontSize={theme.typography.body.fontSize}
            marginTop={50}
            onChangeText={onServicePhone}
          />
          <SmallDescription>{t('common.validations.servicePhone.description')}</SmallDescription>
          <InputText
            type="text"
            placeholder={t('common.validations.serviceEmail.placeholder')}
            value={serviceEmail}
            border="underline"
            fontSize={theme.typography.body.fontSize}
            marginTop={50}
            onChangeText={onServiceEmail}
          />
          <SmallDescription>{t('common.validations.serviceEmail.description')}</SmallDescription>
          <InputText
            type="text"
            placeholder={t('common.validations.pgeAccountNumber.placeholder')}
            value={serviceAccountNumber}
            border="underline"
            fontSize={theme.typography.body.fontSize}
            marginTop={50}
            onChangeText={onServiceAccountNumber}
          />
          <SmallDescription>{t('common.validations.pgeAccountNumber.description')}</SmallDescription>
        </Container>
      ) : (
        <>
          <InputText
            type="text"
            placeholder={t('common.validations.serviceAccountNumber.placeholder')}
            value={serviceAccountNumber}
            border="underline"
            fontSize={theme.typography.body.fontSize}
            marginTop={50}
            onChangeText={onServiceAccountNumber}
          />
          <InputText
            type="text"
            placeholder={t('common.validations.serviceAddress.placeholder')}
            value={serviceAddress}
            border="underline"
            fontSize={theme.typography.body.fontSize}
            marginTop={50}
            onChangeText={onServiceAddress}
          />
          <InputText
            type="text"
            placeholder={t('common.validations.serviceCity.placeholder')}
            value={serviceCity}
            border="underline"
            fontSize={theme.typography.body.fontSize}
            marginTop={50}
            onChangeText={onServiceCity}
          />
          <InputText
            type="text"
            placeholder={t('common.validations.serviceZipCode.placeholder')}
            value={serviceZip}
            border="underline"
            fontSize={theme.typography.body.fontSize}
            marginTop={50}
            onChangeText={onServiceZip}
            marginBottom={50}
          />
        </>
      )}
    </div>
  );
};

export default AccountVerificationView;
