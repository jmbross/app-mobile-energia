import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import { Wrapper, Container, Logo, Description } from './index.styles';

const DRNoEventView = () => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Container>
        <Logo>
          <Img src={images.greenEnergyDisabled} />
        </Logo>
        <Description>{t('screens.main.savingsEvents.savingsEventsScreen.noEvent.description')}</Description>
      </Container>
    </Wrapper>
  );
};

export default DRNoEventView;
