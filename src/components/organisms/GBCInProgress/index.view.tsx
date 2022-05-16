import React from 'react';
import { useTranslation } from 'react-i18next';
import Img from '@/atoms/Img';
import { images } from '@/assets/styles';
import { Wrapper, Container, Title, Logo, Description } from './index.styles';

const GBCInProgressView = () => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Img src={images.logoOlivineGreen} />
        </Logo>
        <Title>{t('screens.main.dashboard.dashboardScreen.inProgress.title')}</Title>
        <Description>{t('screens.main.dashboard.dashboardScreen.inProgress.description')}</Description>
      </Container>
    </Wrapper>
  );
};

export default GBCInProgressView;
