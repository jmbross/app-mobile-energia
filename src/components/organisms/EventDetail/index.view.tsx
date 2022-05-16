import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import IconButton from '@/atoms/IconButton';
import Tabs from '@/molecules/Tabs';
import Section from '@/molecules/Section';
import DRQuickView from '@/organisms/DRQuickView';
import DRDetailView from '@/organisms/DRDetailView';
import ModalEnergyEvent from '@/organisms/ModalEnergyEvent';
import {
  Header,
  Body,
  Title,
  DateTime,
  DateTimeContainer,
  Icon,
  Date,
  Time,
  TabsWrapper,
  NoDataContainer,
  NoData,
  Help,
} from './index.styles';
import { ISavingsEventsHistoryDetailViewProps } from './index.types';

const SavingsEventsHistoryDetailView = ({
  item,
  tabLinkSelected,
  onTabClick,
  onHelp,
  modalEnergyEvent,
  modalEnergyEventClose,
}: ISavingsEventsHistoryDetailViewProps) => {
  const { t } = useTranslation('common');

  if (!item) {
    return (
      <Section>
        <NoDataContainer>
          <NoData>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.events.noData')}</NoData>
        </NoDataContainer>
      </Section>
    );
  }

  return (
    <>
      <Section>
        <Header>
          <Title>{item.name}</Title>
          <DateTimeContainer>
            <DateTime>
              <Icon>
                <Img src={images.calendar} />
              </Icon>
              <Date>{moment(item.date).format('MMMM Do YYYY')}</Date>
            </DateTime>
            <DateTime>
              <Icon>
                <Img src={images.timer} />
              </Icon>
              <Time>{item.timeRange}</Time>
            </DateTime>
          </DateTimeContainer>
        </Header>
        <Body>
          {item.hasUsageData ? (
            <>
              <TabsWrapper>
                <Tabs
                  tabs={[
                    {
                      id: 0,
                      title: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.menus.quickView'),
                      tabName: 'quickView',
                    },
                    {
                      id: 1,
                      title: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.menus.detail'),
                      tabName: 'detail',
                    },
                  ]}
                  selected={tabLinkSelected}
                  onClick={onTabClick}
                />
              </TabsWrapper>
              {tabLinkSelected === 'quickView' ? <DRQuickView /> : <DRDetailView />}
              <Help>
                <IconButton icon={images.help} onClick={onHelp} />
              </Help>
            </>
          ) : (
            <NoDataContainer>
              <NoData>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.events.noData')}</NoData>
            </NoDataContainer>
          )}
        </Body>
      </Section>
      <ModalEnergyEvent show={modalEnergyEvent} onClose={modalEnergyEventClose} />
    </>
  );
};

export default SavingsEventsHistoryDetailView;
