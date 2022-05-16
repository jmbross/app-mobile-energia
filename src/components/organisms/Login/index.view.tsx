import React from 'react';
import { useTranslation } from 'react-i18next';
import { images, theme } from '@/assets/styles';
import { APP_ENV } from '@/constants/environment';
import Img from '@/atoms/Img';
import Button from '@/atoms/Button';
import { appEnv } from '@/helpers/CompnayHelper';
import { Wrapper, Container, Title, Logo, Env } from './index.styles';
import { ILoginViewProps } from './index.types';

const LoginView = ({ isAuthenticated, onStarted, onSignIn, onContinue, onLogout }: ILoginViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        {APP_ENV !== 'production' && <Env>{appEnv()}</Env>}
        <Logo>
          <Img src={images.logoOlivineWebGreen} />
        </Logo>
        <Title>{t('screens.auth.welcomeScreen.title')}</Title>
        {isAuthenticated ? (
          <>
            <Button
              label={t('screens.auth.welcomeScreen.continue')}
              fontSize={theme.typography.button.fontSize}
              color={theme.colors.text[0]}
              backgroundColor={theme.colors.primary[100]}
              borderRadius={theme.borders.button.radius}
              borderColor={theme.colors.primary[100]}
              width="100%"
              height={50}
              marginTop={20}
              onClick={onContinue}
            />
            <Button
              label={t('screens.auth.welcomeScreen.logout')}
              fontSize={theme.typography.button.fontSize}
              color={theme.colors.palette.highest}
              transparent
              width="100%"
              height={50}
              marginTop={20}
              onClick={onLogout}
            />
          </>
        ) : (
          <>
            <Button
              label={t('screens.auth.welcomeScreen.getStarted')}
              fontSize={theme.typography.button.fontSize}
              color={theme.colors.text[0]}
              backgroundColor={theme.colors.primary[100]}
              borderRadius={theme.borders.button.radius}
              width="100%"
              height={50}
              onClick={onStarted}
            />
            <Button
              label={t('screens.auth.welcomeScreen.signIn')}
              fontSize={theme.typography.button.fontSize}
              color={theme.colors.primary[100]}
              backgroundColor={theme.colors.primary[0]}
              borderRadius={theme.borders.button.radius}
              borderColor={theme.colors.primary[100]}
              borderWidth={theme.borders.button.width}
              width="100%"
              height={50}
              marginTop={20}
              onClick={onSignIn}
            />
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default LoginView;
