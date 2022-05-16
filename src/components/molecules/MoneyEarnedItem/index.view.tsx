import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import Button from '@/atoms/Button';
import { UnitHelper } from '@/helpers/UnitHelper';
import { incentiveKindEnum } from '@/types/dr';
import { IMoneyEarnedItemViewProps } from './index.types';
import { Wrapper, Header, Body, Date, Money, Type, Icon, Incentive, Balance } from './index.styles';

const MoneyEarnedItemView = ({ item, onClick }: IMoneyEarnedItemViewProps) => {
  const { t } = useTranslation('common');

  const renderIcon = () => {
    const image = item.incentiveKind === incentiveKindEnum.event ? images.moneyEarnedEvent : images.moneyEarnedOther;
    return <Img src={image} />;
  };

  const renderIncentive = () => {
    const key = Object.entries(incentiveKindEnum).find(([val]) => val === item.incentiveKind)?.[0];
    return t(`screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.${key}.title`);
  };

  return (
    <Button backgroundColor="#fff" width="100%" marginBottom={20} onClick={() => onClick(item)}>
      <Wrapper>
        <Header>
          <Date>{moment(item.earnedDate).format('MMMM Do YYYY')}</Date>
          <Money>{UnitHelper.renderUnitValue(item.changeInAmount, 'money', true, 2)}</Money>
        </Header>
        <Body>
          <Type>
            <Icon>{renderIcon()}</Icon>
            <Incentive>{renderIncentive()}</Incentive>
          </Type>
          <Balance>{UnitHelper.renderUnitValue(item.runningBalance, 'money', false, 2)}</Balance>
        </Body>
      </Wrapper>
    </Button>
  );
};

export default MoneyEarnedItemView;
