import React from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@/atoms/Radio';
import Modal from '@/molecules/Modal';
import { InputWrapper } from '@/organisms/ModalDREventRequest/index.styles';
import InputText from '@/molecules/InputText';
import { IModalDREventRequestViewProps } from './index.types';

const ModalDREventRequestView = ({
  show,
  answer,
  other,
  onClose,
  onOk,
  onCancel,
  onChangeRadio,
  onChangeText,
}: IModalDREventRequestViewProps) => {
  const { t } = useTranslation('common');

  const options = t('screens.main.savingsEvents.savingsEventsScreen.ModalDREventRequest.options', {
    returnObjects: true,
  });

  return (
    <Modal
      title={t('screens.main.savingsEvents.savingsEventsScreen.ModalDREventRequest.title')}
      show={show}
      onClose={onClose}
      onOk={onOk}
      textOk={t('screens.main.savingsEvents.savingsEventsScreen.ModalDREventRequest.ok')}
      onCancel={onCancel}
      textCancel={t('screens.main.savingsEvents.savingsEventsScreen.ModalDREventRequest.cancel')}
    >
      <Radio
        items={Object.values(options).map((key) => {
          return { id: Object.keys(key)[0], name: Object.keys(key)[0], text: Object.values(key)[0] };
        })}
        value={answer}
        onChange={(name) => onChangeRadio(name as string)}
      />
      {answer === 'OTHER' && (
        <InputWrapper>
          <InputText
            type="text"
            placeholder={t('common.validations.otherSpecify.placeholder')}
            value={other}
            border="border"
            onChangeText={onChangeText}
          />
        </InputWrapper>
      )}
    </Modal>
  );
};

export default ModalDREventRequestView;
