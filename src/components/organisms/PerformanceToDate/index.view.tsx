import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets/styles';
import Section from '@/molecules/Section';
import Usage from '@/molecules/Usage';
import Level from '@/molecules/Level';
import ModalReward from '@/organisms/ModalReward';
import { PerformanceToDateEnum } from '@/types/dr';
import { UsageGroup, CustomLevel } from './index.styles';
import { IPerformanceToDateViewProps } from './index.types';

const PerformanceToDateView = ({
  eventData,
  earningData,
  type,
  onHelp,
  modalReward,
  modalRewardClose,
}: IPerformanceToDateViewProps) => {
  const { t } = useTranslation('common');

  const renderEvents = () => (
    <>
      <Usage
        value={eventData?.total}
        valueStrong
        unit="default"
        description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.events.performanceToDate.events')}
      />
      <Usage
        value={eventData?.energyImpact}
        valueStrong
        unit="kwh"
        description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.events.performanceToDate.energyImpact')}
      />
      <CustomLevel>
        <Level level={eventData?.level} onClick={onHelp} />
      </CustomLevel>
    </>
  );

  const renderMoneyEarned = () => (
    <>
      <Usage
        value={earningData?.total}
        valueStrong
        unit="money"
        description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.performanceToDate.total')}
      />
      <Usage
        value={earningData?.event}
        valueStrong
        valueIcon={images.moneyEarnedEvent.image}
        unit="money"
        description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.performanceToDate.event')}
      />
      <Usage
        value={earningData?.other}
        valueStrong
        valueIcon={images.moneyEarnedOther.image}
        unit="money"
        description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.moneyEarned.performanceToDate.other')}
      />
    </>
  );

  return (
    <>
      <Section title={t(`screens.main.savingsEvents.savingsEventsHistoryScreen.${type}.performanceToDate.title`)}>
        <UsageGroup>{type === PerformanceToDateEnum.events ? renderEvents() : renderMoneyEarned()}</UsageGroup>
      </Section>
      <ModalReward show={modalReward} onClose={modalRewardClose} />
    </>
  );
};

export default PerformanceToDateView;
