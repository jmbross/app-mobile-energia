import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Section from '@/molecules/Section';
import { Wrapper, Container, Title, Upcoming, Date, Time } from './index.styles';
import { IRemindersViewProps } from './index.types';

const RemindersView = ({ hasRequest, startDate, endDate }: IRemindersViewProps) => {
  const { t } = useTranslation('common');

  return (
    <Section title={t('screens.main.dashboard.dashboardScreen.reminders.title')}>
      <Wrapper>
        <Container>
          {hasRequest ? (
            <>
              <Title>{t('screens.main.dashboard.dashboardScreen.reminders.upcoming')}</Title>
              <Upcoming>
                <Date>{moment(startDate).format('dddd, MMMM DD')}</Date>
                <Time>{`${moment(startDate).format('h:mm a')} - ${moment(endDate).format('h:mm a')}`}</Time>
              </Upcoming>
            </>
          ) : (
            <Title>{t('screens.main.dashboard.dashboardScreen.reminders.noUpcoming')}</Title>
          )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default RemindersView;
