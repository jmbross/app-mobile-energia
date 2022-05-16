import React from 'react';
import { useTranslation } from 'react-i18next';
import Img from '@/atoms/Img';
import { images } from '@/assets/styles';
import { Wrapper, Container, Logo, Title, Description } from './index.styles';

const ErrorView = () => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Img src={images.warning} />
        </Logo>
        <Title>{t('screens.errorScreen.data.title')}</Title>
        <Description>{t('screens.errorScreen.data.description')}</Description>
      </Container>
    </Wrapper>
  );
};

export default ErrorView;
