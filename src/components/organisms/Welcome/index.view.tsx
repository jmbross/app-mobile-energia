import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets/styles';
import IconButton from '@/atoms/IconButton';
import { Wrapper, Title, Description, MobileApp, ButtonGroup, QRWrapper, QRImage } from './index.styles';
import { IWelcomeViewProps } from './index.types';

const WelcomeView = ({ onClickAppStore, onClickGooglePlay }: IWelcomeViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Title>{t('screens.auth.welcomeScreen.welcome.title')}</Title>
      <Description>{t('screens.auth.welcomeScreen.welcome.description')}</Description>
      <MobileApp>{t('screens.auth.welcomeScreen.welcome.mobileApp')}</MobileApp>
      <ButtonGroup>
        <QRWrapper>
          <IconButton icon={images.appStore.image} onClick={onClickAppStore} />
          <QRImage src={images.iosQR.image} />
        </QRWrapper>
        <QRWrapper>
          <IconButton icon={images.googlePlay.image} onClick={onClickGooglePlay} />
          <QRImage src={images.androidQR.image} />
        </QRWrapper>
      </ButtonGroup>
    </Wrapper>
  );
};

export default WelcomeView;
