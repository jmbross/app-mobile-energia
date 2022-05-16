import React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@/atoms/IconButton';
import Section from '@/molecules/Section';
import { TargetDirectionEnum } from '@/types/dr';
import { Wrapper, Container, Header, Body, Description, Suggest } from './index.styles';
import { IEnergySavingIdeasViewProps } from './index.types';

const EnergySavingIdeasView = ({ tabs, selected, targetDirection, onClick }: IEnergySavingIdeasViewProps) => {
  const { t } = useTranslation('common');

  const textSuggest = () => {
    const suggest = targetDirection === TargetDirectionEnum.loadDecrease ? 'normal' : 'loadShift';

    return t(`screens.main.savingsEvents.savingsEventsScreen.savingIdeas.ideas.${selected}.suggest.${suggest}`);
  };

  const textDescription = () => {
    return t(`screens.main.savingsEvents.savingsEventsScreen.savingIdeas.ideas.${selected}.description`);
  };

  const render = () => {
    return tabs.map(({ id, title, active, deactive }) => {
      const icon = title === selected ? active : deactive;
      return <IconButton key={id} icon={icon} marginLeft={10} marginRight={10} onClick={() => onClick(title)} />;
    });
  };

  return (
    <Section title={t('screens.main.savingsEvents.savingsEventsScreen.savingIdeas.title')}>
      <Wrapper>
        <Container>
          <Header>{render()}</Header>
          <Body>
            <Description>{textDescription()}</Description>
            <Suggest>{textSuggest()}</Suggest>
          </Body>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default EnergySavingIdeasView;
