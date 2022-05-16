import React from 'react';
import { useTranslation } from 'react-i18next';
import MoneyEarnedItem from '@/molecules/MoneyEarnedItem';
import { Wrapper, NoData } from './index.styles';
import { IMoneyEarnedListViewProps } from './index.types';

const MoneyEarnedListView = ({ items, onClick }: IMoneyEarnedListViewProps) => {
  const { t } = useTranslation('common');

  if (items.length === 0) {
    return (
      <Wrapper>
        <NoData>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.noData')}</NoData>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {items.map((item) => (
        <MoneyEarnedItem key={item.earningId} item={item} onClick={onClick} />
      ))}
    </Wrapper>
  );
};

export default MoneyEarnedListView;
