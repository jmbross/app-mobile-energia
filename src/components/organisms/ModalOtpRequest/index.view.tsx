import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import InputText from '@/molecules/InputText';
import { IModalOtpRequestViewProps } from './index.types';
import { Description } from './index.styles';

const ModalOtpRequestView = ({
  phoneNumber,
  disabledSendCode,
  onChangePhoneNumber,
  show,
  onClose,
  onOk,
}: IModalOtpRequestViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      title={t('screens.main.settings.account.accountScreen.modalChangePhone.title')}
      showClose
      show={show}
      onClose={onClose}
      disabledOk={disabledSendCode}
      onOk={onOk}
      textOk={t('screens.main.settings.account.accountScreen.modalChangePhone.ok')}
    >
      <Description>{t('screens.main.settings.account.accountScreen.modalChangePhone.description')}</Description>
      <InputText
        type="text"
        placeholder={t('common.validations.smsPhone.placeholder')}
        border="underline"
        value={phoneNumber}
        maxLength={12}
        marginBottom={50}
        onChangeText={onChangePhoneNumber}
      />
    </Modal>
  );
};

export default ModalOtpRequestView;
