import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '@/molecules/Section';
import Level from '@/molecules/Level';
import Usage from '@/molecules/Usage';
import ModalReward from '@/organisms/ModalReward';
import { Container, Item } from './index.styles';
import { IAchievementViewProps } from './index.types';
import { theme } from '@/assets/styles';

const AchievementView = ({ moneyEarned, level, onHelp, modalReward, modalRewardClose }: IAchievementViewProps) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Section title={t('screens.main.dashboard.dashboardScreen.achievement.title')}>
        <Container>
          <Item>
            <Usage
              value={moneyEarned}
              unit="money"
              valueStrong
              valueColor="black"
              valuePadding="10px"
              valueSize={theme.typography.h1.fontSize}
              description={t('screens.main.dashboard.dashboardScreen.achievement.earn')}
            />
          </Item>
          <Item>
            <Level level={level} onClick={onHelp} />
          </Item>
        </Container>
      </Section>
      <ModalReward show={modalReward} onClose={modalRewardClose} />
    </>
  );
};

export default AchievementView;
