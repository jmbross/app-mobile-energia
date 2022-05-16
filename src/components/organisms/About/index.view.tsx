import React from 'react';
import { useTranslation } from 'react-i18next';
import { APP_ENV } from '@/constants/environment';
import Button from '@/atoms/Button';
import { images, theme } from '@/assets/styles';
import { appEnv } from '@/helpers/CompnayHelper';
import { Wrapper, Container, Description, CopyrightContainer, Copyright, Env } from './index.styles';
import { IAboutViewProps } from './index.types';

const AboutView = ({ onTerms, onPrivacy }: IAboutViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Description>{t('screens.main.settings.aboutScreen.description')}</Description>
        {APP_ENV !== 'production' && <Env>{appEnv()}</Env>}
        <Button
          label={t('screens.main.settings.aboutScreen.terms.title')}
          fontSize={theme.typography.button.fontSize}
          color={theme.colors.link.default}
          backgroundColor={theme.colors.input.background}
          marginTop={40}
          paddingTop={10}
          paddingBottom={10}
          paddingLeft={17}
          paddingRight={17}
          width={350}
          align="left"
          rightIcon={images.arrowRightBlue.image}
          onClick={() => onTerms(t('screens.main.settings.aboutScreen.terms.link'))}
        />
        <Button
          label={t('screens.main.settings.aboutScreen.privacy.title')}
          fontSize={theme.typography.button.fontSize}
          color={theme.colors.link.default}
          backgroundColor={theme.colors.input.background}
          marginTop={20}
          paddingTop={10}
          paddingBottom={10}
          paddingLeft={17}
          paddingRight={17}
          width={350}
          align="left"
          rightIcon={images.arrowRightBlue.image}
          onClick={() => onPrivacy(t('screens.main.settings.aboutScreen.privacy.link'))}
        />
        <CopyrightContainer>
          <Copyright>{t('screens.main.settings.aboutScreen.copyright') + new Date().getFullYear()}</Copyright>
        </CopyrightContainer>
      </Container>
    </Wrapper>
  );
};

export default AboutView;
