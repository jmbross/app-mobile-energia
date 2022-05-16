import React from 'react';
import { useTranslation } from 'react-i18next';
import InputText from '@/molecules/InputText';
import Dropdown from '@/molecules/Dropdown';
import { InputWrapper } from '@/organisms/ModalOptOut';
import { Container, Question } from './index.styles';
import { ISingleSurveyViewProps } from './index.types';

const SingleSurveyView = ({
  programName,
  surveyAnswer,
  referralName,
  referralEmail,
  referralPhoneNumber,
  other,
  onChangeSurvey,
  onChangeReferralName,
  onChangeReferralEmail,
  onChangeReferralPhoneNumber,
  onChangeOther,
}: ISingleSurveyViewProps) => {
  const { t } = useTranslation('common');

  const answers = t(`programs.${programName}.singleSurveyScreen.answers`, {
    returnObjects: true,
  });

  return (
    <Container>
      <Question>{t(`programs.${programName}.singleSurveyScreen.question`)}</Question>
      <Dropdown
        items={Object.values(answers).map((key) => {
          return { name: Object.keys(key)[0], text: Object.values(key)[0] };
        })}
        placeholder={t(`programs.${programName}.singleSurveyScreen.placeholder`)}
        values={[surveyAnswer.answer]}
        onChange={(name) => onChangeSurvey(t(`programs.${programName}.singleSurveyScreen.code`), name[0] as string)}
      />
      {surveyAnswer.answer === 'referral' && (
        <InputWrapper>
          <InputText
            type="text"
            border="underline"
            placeholder={t('common.validations.referralName.placeholder')}
            value={referralName}
            onChangeText={onChangeReferralName}
          />
          <InputText
            type="text"
            border="underline"
            placeholder={t('common.validations.referralEmail.placeholder')}
            value={referralEmail}
            marginTop={20}
            onChangeText={onChangeReferralEmail}
          />
          <InputText
            type="text"
            border="underline"
            placeholder={t('common.validations.referralPhoneNumber.placeholder')}
            value={referralPhoneNumber}
            marginTop={20}
            onChangeText={onChangeReferralPhoneNumber}
          />
        </InputWrapper>
      )}
      {surveyAnswer.answer === 'other' && (
        <InputWrapper>
          <InputText
            type="text"
            placeholder={t('common.validations.otherSpecify.placeholder')}
            value={other}
            border="border"
            onChangeText={onChangeOther}
          />
        </InputWrapper>
      )}
    </Container>
  );
};

export default SingleSurveyView;
