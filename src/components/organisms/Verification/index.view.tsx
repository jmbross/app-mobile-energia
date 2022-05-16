import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Button from '@/atoms/Button';
import InputText from '@/molecules/InputText';
import ModalAccountNumber from '@/organisms/ModalAccountNumber';
import { Description, Tip } from './index.styles';
import { IVerificationViewProps } from './index.types';

const VerificationView = ({
  programName,
  isBusiness,
  accountName,
  accountNumber,
  accountMinLength,
  accountMaxLength,
  modalAccountNumber,
  modalAccountNumberClose,
  modalAccountNumberOk,
  onClickAccountNumber,
  onChangeName,
  onChangeAccountNumber,
}: IVerificationViewProps) => {
  const { t } = useTranslation('common');

  const isTip = i18next.exists(`common:programs.${programName}.verificationScreen.accountNumber`);

  return (
    <>
      <Description>{t(`programs.${programName}.verificationScreen.description`)}</Description>
      {isTip && (
        <Button transparent marginTop={20} onClick={onClickAccountNumber}>
          <Tip>{t(`programs.${programName}.verificationScreen.accountNumber`)}</Tip>
        </Button>
      )}
      <InputText
        type="text"
        border="underline"
        placeholder={
          isBusiness
            ? t('common.validations.businessName.placeholder')
            : t('common.validations.lastNameAccountHolder.placeholder')
        }
        value={accountName}
        marginTop={50}
        onChangeText={onChangeName}
      />
      <InputText
        type="text"
        border="underline"
        placeholder={t('common.validations.utilityAccount.placeholder')}
        value={accountNumber}
        minLength={accountMinLength}
        maxLength={accountMaxLength}
        marginTop={50}
        marginBottom={80}
        onChangeText={onChangeAccountNumber}
      />
      <ModalAccountNumber show={modalAccountNumber} onClose={modalAccountNumberClose} onOk={modalAccountNumberOk} />
    </>
  );
};

export default VerificationView;
