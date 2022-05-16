import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '@/molecules/Modal';
import InputText from '@/molecules/InputText';
import { IModalOtpVerificationViewProps } from './index.types';
import { Description } from './index.styles';

const ModalOtpVerificationView = ({
  disabledVerify,
  show,
  onClose,
  onVerification,
  onResend,
  otpCode,
  onChangeOtpCode,
}: IModalOtpVerificationViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Modal
      title={t('screens.main.settings.account.accountScreen.modalVerifyPhone.title')}
      showClose
      show={show}
      onClose={onClose}
      disabledOk={disabledVerify}
      onOk={onVerification}
      textOk={t('screens.main.settings.account.accountScreen.modalVerifyPhone.ok')}
      onCancel={onResend}
      textCancel={t('screens.main.settings.account.accountScreen.modalVerifyPhone.cancel')}
    >
      <Description>{t('screens.main.settings.account.accountScreen.modalVerifyPhone.description')}</Description>

      <InputText
        type="text"
        border="underline"
        value={otpCode}
        maxLength={6}
        marginBottom={50}
        onChangeText={onChangeOtpCode}
      />
    </Modal>
  );
};

export default ModalOtpVerificationView;
