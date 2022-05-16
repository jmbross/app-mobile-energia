import React from 'react';
import { useTranslation } from 'react-i18next';
import lodash from 'lodash';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import IconButton from '@/atoms/IconButton';
import { AchievementLevel } from '@/types/dashboard';
import { ILevelProps } from './index.types';
import { Container, Help, Logo, Title, TitleContainer, Wrapper } from './index.styles';

const Level = ({ level, size = 'medium', onClick }: ILevelProps) => {
  const { t } = useTranslation('common');

  const renderIcon = () => {
    switch (level) {
      case AchievementLevel.bronze:
        return images.levelBronze;

      case AchievementLevel.silver:
        return images.levelSilver;

      case AchievementLevel.gold:
        return images.levelGold;

      case AchievementLevel.noAct:
      default:
        return images.levelNoAction;
    }
  };

  const renderTitle = () => {
    return t(`screens.main.dashboard.dashboardScreen.achievement.modalReward.level.${lodash.camelCase(level)}.title`);
  };

  return (
    <Wrapper>
      <Container>
        <Logo size={size}>
          <Img src={renderIcon()} />
        </Logo>
        <TitleContainer>
          <Title>{renderTitle()}</Title>
          {onClick && (
            <Help>
              <IconButton icon={images.help} onClick={onClick} />
            </Help>
          )}
        </TitleContainer>
      </Container>
    </Wrapper>
  );
};

export default Level;
