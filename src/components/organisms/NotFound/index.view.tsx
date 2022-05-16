import React from 'react';
import { useTranslation } from 'react-i18next';
import { images, theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import Img from '@/atoms/Img';
import { Wrapper, Container, Logo, Title, Description } from './index.styles';
import { INotFoundView } from './index.types';

const NotFoundView = ({ onGoBack }: INotFoundView) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Title>{t('screens.errorScreen.404.title')}</Title>
        <Logo>
          <Img src={images.error404} />
        </Logo>
        <Description>{t('screens.errorScreen.404.description')}</Description>
        <Button
          label={t('screens.errorScreen.404.goBack')}
          fontSize={theme.typography.button.fontSize}
          color={theme.colors.text[100]}
          transparent
          borderColor={theme.colors.text[100]}
          borderWidth={theme.borders.default.width}
          borderRadius={theme.borders.default.radius}
          marginTop={80}
          width={260}
          height={50}
          onClick={onGoBack}
        />
      </Container>
    </Wrapper>
  );
};

export default NotFoundView;
