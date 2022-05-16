import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '@/molecules/Dropdown';
import { Survey } from '@/types/enrollment';
import { Container, Description, Question, Thankyou } from './index.styles';
import { IMultipleSurveyViewProps } from './index.types';

const MultipleSurveyView = ({ program, surveyAnswer, onChangeSurvey }: IMultipleSurveyViewProps) => {
  const { t } = useTranslation('common');

  const questions = t<string, Survey[]>(`programs.${program}.multipleSurveyScreen.questions`, { returnObjects: true });

  const findValue = (code: string) => {
    const value = surveyAnswer.find((surveyAnswer) => {
      return surveyAnswer.question === code ? surveyAnswer.answer : '';
    });

    if (value) {
      return [value.answer];
    }

    return [];
  };

  return (
    <>
      <Description>{t(`programs.${program}.multipleSurveyScreen.description`)}</Description>
      {questions.map(({ question, code, answers }) => (
        <Container key={question}>
          <Question>{question}</Question>
          <Dropdown
            items={Object.values(answers).map((key) => {
              return { name: Object.keys(key)[0], text: Object.values(key)[0] };
            })}
            placeholder={t(`programs.${program}.multipleSurveyScreen.placeholder`)}
            values={findValue(code)}
            onChange={(name) => onChangeSurvey(code, name[0] as string)}
          />
        </Container>
      ))}
      <Thankyou>{t(`programs.${program}.multipleSurveyScreen.thankYou`)}</Thankyou>
    </>
  );
};

export default MultipleSurveyView;
