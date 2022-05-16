import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import Modal from '@/molecules/Modal';
import { DefaultImage } from '@/types/images';
import { IModalRewardViewProps } from './index.types';
import { Title, Wrapper, Reward, Logo, Level, Summary, Description } from './index.styles';

const ModalRewardView = ({ show, onClose }: IModalRewardViewProps) => {
  const { t } = useTranslation('common');

  const renderReward = (image: DefaultImage, title: string, summary: string, description: string) => (
    <Wrapper>
      <Reward>
        <Logo>
          <Img src={image} />
        </Logo>
        <Level>{title}</Level>
      </Reward>
      <Summary>{summary}</Summary>
      <Description>{description}</Description>
    </Wrapper>
  );

  return (
    <Modal show={show} showClose onClose={onClose}>
      <Title>{t('screens.main.dashboard.dashboardScreen.achievement.modalReward.title')}</Title>
      <Title>{t('screens.main.dashboard.dashboardScreen.achievement.modalReward.title')}</Title>
      {renderReward(
        images.levelBronze,
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.bronze.title'),
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.bronze.summary'),
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.bronze.description'),
      )}
      {renderReward(
        images.levelSilver,
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.silver.title'),
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.silver.summary'),
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.silver.description'),
      )}
      {renderReward(
        images.levelGold,
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.gold.title'),
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.gold.summary'),
        t('screens.main.dashboard.dashboardScreen.achievement.modalReward.level.gold.description'),
      )}
    </Modal>
  );
};

export default ModalRewardView;
