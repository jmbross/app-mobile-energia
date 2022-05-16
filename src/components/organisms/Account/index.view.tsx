import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import InputText from '@/molecules/InputText';
import Stack from '@/molecules/Stack';
import ModalOtpRequest from '@/organisms/ModalOtpRequest';
import ModalOtpVerification from '@/organisms/ModalOtpVerification';
import ModalOtpVerified from '@/organisms/ModalOtpVerified';
import ModalOtpError from '@/organisms/ModalOtpError';
import ModalOtpResent from '@/organisms/ModalOtpResent';
import { Wrapper, Buttons } from './index.styles';
import { IAccountViewProps } from './index.types';

const AccountView = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  onFirstName,
  onLastName,
  disabledSave,
  onSave,
  onLogout,
  onPassword,
  onSmsPhoneEdit,
  onSmsPhoneRemove,
  modalOtpRequest,
  modalOtpVerification,
  modalOtpVerified,
  modalOtpError,
  modalOtpResent,
}: IAccountViewProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Wrapper>
        <InputText
          type="text"
          label={t('common.validations.firstName.title')}
          placeholder={t('common.validations.firstName.placeholder')}
          value={firstName}
          border="underline"
          marginTop={20}
          onChangeText={onFirstName}
        />
        <InputText
          type="text"
          label={t('common.validations.lastName.title')}
          placeholder={t('common.validations.lastName.placeholder')}
          value={lastName}
          border="underline"
          marginTop={40}
          onChangeText={onLastName}
        />
        <InputText
          type="text"
          label={t('common.validations.email.title')}
          value={email}
          readonly
          border="none"
          marginTop={40}
          onChangeText={() => console.log('')}
        />
        <InputText
          type="text"
          label={t('common.validations.password.title')}
          border="none"
          marginTop={40}
          onChangeText={() => console.log('')}
          inputNotUsed
          right={
            <Button
              label={t('common.validations.changePassword.title')}
              fontSize={theme.typography.button.fontSize}
              color={theme.colors.link.default}
              transparent
              onClick={onPassword}
            />
          }
        />
        <InputText
          type="text"
          label={t('common.validations.smsPhone.title')}
          value={phoneNumber || ''}
          border="none"
          marginTop={40}
          onChangeText={() => console.log('')}
          readonly
          inputNotUsed={!phoneNumber}
          right={
            <Stack flexDirection="row">
              {phoneNumber ? (
                <>
                  <Button
                    label={t('common.generalButtons.change')}
                    fontSize={theme.typography.button.fontSize}
                    color={theme.colors.link.default}
                    transparent
                    onClick={onSmsPhoneEdit}
                  />
                  <Button
                    label={t('common.generalButtons.remove')}
                    fontSize={theme.typography.button.fontSize}
                    color={theme.colors.palette.highest}
                    transparent
                    marginLeft={30}
                    onClick={onSmsPhoneRemove}
                  />
                </>
              ) : (
                <Button
                  label={t('screens.main.settings.account.accountScreen.addPhoneNumber')}
                  fontSize={theme.typography.button.fontSize}
                  color={theme.colors.link.default}
                  transparent
                  onClick={onSmsPhoneEdit}
                />
              )}
            </Stack>
          }
        />
        <Buttons>
          <Button
            disabled={disabledSave}
            label={t('common.generalButtons.save')}
            fontSize={theme.typography.button.fontSize}
            color={theme.colors.text[0]}
            backgroundColor={disabledSave ? theme.colors.primary[25] : theme.colors.primary[100]}
            borderRadius={30}
            borderColor={disabledSave ? theme.colors.primary[25] : theme.colors.primary[100]}
            borderWidth={2}
            paddingLeft={20}
            paddingRight={20}
            paddingTop={5}
            paddingBottom={5}
            onClick={onSave}
          />
          <Button
            label="Log out"
            fontSize={theme.typography.button.fontSize}
            color={theme.colors.palette.highest}
            backgroundColor={theme.colors.input.background}
            borderRadius={30}
            borderWidth={2}
            borderColor={theme.colors.palette.highest}
            marginLeft={20}
            paddingLeft={20}
            paddingRight={20}
            paddingTop={5}
            paddingBottom={5}
            onClick={onLogout}
          />
        </Buttons>
      </Wrapper>
      <ModalOtpRequest show={modalOtpRequest} />
      <ModalOtpVerification show={modalOtpVerification} />
      <ModalOtpVerified show={modalOtpVerified} />
      <ModalOtpError show={modalOtpError} />
      <ModalOtpResent show={modalOtpResent} />
    </>
  );
};

export default AccountView;
