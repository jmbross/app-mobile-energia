import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '@/molecules/Dropdown';
import { Language } from '@/types/setting';
import { Body, Header, Wrapper } from './index.styles';
import { IAuthTemplateViewProps } from './index.types';

const AuthTemplateView = ({ children, appLogin, language, onChangeLanguage }: IAuthTemplateViewProps) => {
  const { t } = useTranslation('common');

  const languages = t('common.languages', { returnObjects: true });

  return (
    <Wrapper>
      {!appLogin && (
        <Header>
          <Dropdown
            items={Object.values(languages).map((key) => {
              return { name: Object.keys(key)[0].toUpperCase(), text: Object.values(key)[0] };
            })}
            values={[language]}
            onChange={(name) => onChangeLanguage(name[0] as Language)}
          />
        </Header>
      )}
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default AuthTemplateView;
