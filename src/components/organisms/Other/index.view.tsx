import React from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@/atoms/Radio';
import Paper from '@/molecules/Paper';
import { Language } from '@/types/setting';
import { Wrapper, Title } from './index.styles';
import { IOtherViewProps } from './index.types';

const OtherView = ({ language, onLanguage }: IOtherViewProps) => {
  const { t } = useTranslation('common');
  const languages = t('common.languages', { returnObjects: true });

  return (
    <Wrapper>
      <Paper transparent>
        <Title>{t('screens.main.settings.otherScreen.language')}</Title>
        <Radio
          items={Object.values(languages).map((key) => {
            return { id: Object.keys(key)[0], name: Object.keys(key)[0].toUpperCase(), text: Object.values(key)[0] };
          })}
          value={language}
          onChange={(name) => onLanguage(name as Language)}
        />
      </Paper>
    </Wrapper>
  );
};

export default OtherView;
