import React from 'react';
import { useTranslation } from 'react-i18next';
import { images, theme } from '@/assets/styles';
import Img from '@/atoms/Img';
import Button from '@/atoms/Button';
import { Wrapper, Container, Logo, Title } from './index.styles';
import { IGBCInProgressView } from './index.types';

const GBCInProgressView = ({ onTryAgain }: IGBCInProgressView) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Img src={images.logoOlivineGreen} />
        </Logo>
        <Title>{t('screens.main.dashboard.dashboardScreen.inComplete.title')}</Title>
        <Button
          label={t('common.generalButtons.tryAgain')}
          fontSize={theme.typography.button.fontSize}
          color={theme.colors.text[0]}
          backgroundColor={theme.colors.primary[100]}
          borderRadius={100}
          width={250}
          height={46}
          onClick={onTryAgain}
        />
      </Container>
    </Wrapper>
  );
};

export default GBCInProgressView;
