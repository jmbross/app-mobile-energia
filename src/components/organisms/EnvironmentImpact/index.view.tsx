import React from 'react';
import { useTranslation } from 'react-i18next';
import { images, theme } from '@/assets/styles';
import IconButton from '@/atoms/IconButton';
import Img from '@/atoms/Img';
import Section from '@/molecules/Section';
import Usage from '@/molecules/Usage';
import ModalEnvironmentalImpact from '@/organisms/ModalEnvironmentalImpact';
import { UnitType } from '@/types/index';
import { DefaultImage } from '@/types/images';
import { ImpactGroup, Container, Help, Item, Header, Body, Logo, Title, UsageGroup } from './index.styles';
import { IEnvironmentImpactViewProps } from './index.types';

const EnvironmentImpactView = ({
  item,
  onHelp,
  modalEnvironmentalImpact,
  modalEnvironmentalImpactClose,
}: IEnvironmentImpactViewProps) => {
  const { t } = useTranslation('common');

  const renderImpact = (
    logo: DefaultImage,
    title: string,
    yourValue: number,
    yourUnit: UnitType,
    communityValue: number,
    communityUnit: UnitType,
    underline?: boolean,
  ) => (
    <Item underline={underline}>
      <Header>
        <Logo>
          <Img src={logo} />
        </Logo>
        <Title>{title}</Title>
      </Header>
      <Body>
        <UsageGroup>
          <Usage
            value={Math.round(yourValue)}
            unit={yourUnit}
            arrow={yourValue > 0 ? '↓' : ''}
            valueStrong
            description={t('screens.main.dashboard.dashboardScreen.environmentalImpact.user')}
            descriptionColor={theme.colors.palette.your}
          />
          <Usage
            value={Math.round(communityValue)}
            unit={communityUnit}
            arrow={communityValue > 0 ? '↓' : ''}
            valueStrong
            description={t('screens.main.dashboard.dashboardScreen.environmentalImpact.community')}
            descriptionColor={theme.colors.palette.community}
          />
        </UsageGroup>
      </Body>
    </Item>
  );

  return (
    <>
      <Section
        title={t('screens.main.dashboard.dashboardScreen.environmentalImpact.title')}
        description={t('screens.main.dashboard.dashboardScreen.environmentalImpact.description')}
      >
        <Container>
          <ImpactGroup>
            {renderImpact(
              images.greenEnergy,
              t('screens.main.dashboard.dashboardScreen.environmentalImpact.energyImpact'),
              item.reduction.yours,
              'kwh',
              item.reduction.community,
              'kwh',
              true,
            )}
            {renderImpact(
              images.co2,
              t('screens.main.dashboard.dashboardScreen.environmentalImpact.emissions'),
              item.emissions.yours,
              'lbs',
              item.emissions.community,
              'lbs',
              true,
            )}
            {renderImpact(
              images.car,
              t('screens.main.dashboard.dashboardScreen.environmentalImpact.miles'),
              item.milesDriven.yours,
              'miles',
              item.milesDriven.community,
              'miles',
            )}
          </ImpactGroup>
          <Help>
            <IconButton icon={images.help} onClick={onHelp} />
          </Help>
        </Container>
      </Section>
      <ModalEnvironmentalImpact show={modalEnvironmentalImpact} onClose={modalEnvironmentalImpactClose} />
    </>
  );
};

export default EnvironmentImpactView;
