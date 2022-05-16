import React from 'react';
import { useTranslation } from 'react-i18next';
import lodash from 'lodash';
import moment from 'moment';
import { theme } from '@/assets/styles';
import Section from '@/molecules/Section';
import Usage from '@/molecules/Usage';
import { IEarningDetailViewProps } from './index.types';
import { Description, Container, Item, ItemContainer, NoData, NoDataContainer } from './index.styles';

const EarningDetailView = ({ item }: IEarningDetailViewProps) => {
  const { t } = useTranslation('common');

  if (!item) {
    return (
      <Section>
        <NoDataContainer>
          <NoData>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.moneyEarned.noData')}</NoData>
        </NoDataContainer>
      </Section>
    );
  }

  return (
    <Section
      title={t(
        `screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.${lodash.camelCase(
          item.incentiveKind,
        )}.title`,
      )}
      titleAlign="center"
    >
      <Description>
        {t(
          `screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.${lodash.camelCase(
            item.incentiveKind,
          )}.description`,
        )}
      </Description>
      <Container>
        <Item>
          <ItemContainer>
            <Usage
              value={moment(item.earnedDate).format('ddd, MMM DD, YYYY')}
              valueStrong
              valueColor={theme.colors.primary[75]}
              unit="default"
              description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.moneyEarned')}
            />
          </ItemContainer>
        </Item>
        <Item>
          <ItemContainer>
            <Usage
              value={item.changeInAmount}
              valueStrong
              valueColor={theme.colors.primary[75]}
              unit="money"
              description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.moneyEarned')}
            />
          </ItemContainer>
        </Item>
      </Container>
    </Section>
  );
};

export default EarningDetailView;
