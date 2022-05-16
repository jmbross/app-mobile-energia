import React from 'react';
import { useTranslation } from 'react-i18next';
import Plotly from 'react-plotly.js';
import moment from 'moment';
import { images, theme } from '@/assets/styles';
import IconButton from '@/atoms/IconButton';
import Section from '@/molecules/Section';
import Usage from '@/molecules/Usage';
import ModalEnergyHistory from '@/organisms/ModalEnergyHistory';
import { Container, Help, UsageGroup, Header, Body, NoDataContainer, NoData } from './index.styles';
import { RecentEnergyHistoryViewProps } from './index.types';

const RecentEnergyHistoryView = ({
  item,
  onHelp,
  modalEnergyHistory,
  modalEnergyHistoryClose,
}: RecentEnergyHistoryViewProps) => {
  const { t } = useTranslation('common');

  const data = [
    {
      name: t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.graph.legend.lastWeek'),
      type: 'bar',
      x: moment.weekdaysShort(true).map((day) => day.toUpperCase()),
      y: item.lastWeekGraph,
      marker: {
        color: item.lastWeekGraph.map((val: number) => {
          if (item.lastWeekHigh === val) return theme.colors.palette.highest;
          if (item.lastWeekLow === val) return theme.colors.palette.lowest;
          return theme.colors.palette.lastWeek;
        }),
      },
    },
    {
      name: t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.graph.legend.thisWeek'),
      type: 'bar',
      x: moment.weekdaysShort(true).map((day) => day.toUpperCase()),
      y: item.thisWeekGraph,
      marker: {
        color: theme.colors.palette.thisWeek,
      },
    },
  ];

  const layout = {
    height: 300,
    margin: {
      t: 20,
      r: 20,
      b: 20,
      l: 20,
      pad: 10,
    },
    legend: {
      orientation: 'h',
      x: 0.3,
      y: -0.2,
    },
    xaxis: { fixedrange: true },
    yaxis: { fixedrange: true, showticklabels: false, showgrid: false, zeroline: false },
  };

  const renderGraph = (hasSufficientUsageData?: boolean) => {
    switch (hasSufficientUsageData) {
      case undefined:
        return <></>;
      case false:
        return (
          <NoDataContainer>
            <NoData>{t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.noData')}</NoData>
          </NoDataContainer>
        );
      default:
        return (
          <>
            <Header>
              <Plotly data={data} layout={layout} config={{ displayModeBar: false }} />
            </Header>
            <Body>
              <UsageGroup>
                <Usage
                  title={t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.usage.typical', {
                    day: moment().format('dddd'),
                  })}
                  value={item.weekdayAvg}
                  valueStrong
                  unit="kwh"
                />
                <Usage
                  title={t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.usage.highest')}
                  value={item.lastWeekHigh}
                  valueStrong
                  valueColor={theme.colors.palette.highest}
                  unit="kwh"
                  description={item.lastWeekHighDay}
                />
                <Usage
                  title={t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.usage.lowest')}
                  value={item.lastWeekLow}
                  valueStrong
                  valueColor={theme.colors.palette.lowest}
                  unit="kwh"
                  description={item.lastWeekLowDay}
                />
              </UsageGroup>
            </Body>
            <Help>
              <IconButton icon={images.help} onClick={onHelp} />
            </Help>
          </>
        );
    }
  };

  return (
    <>
      <Section title={t('screens.main.dashboard.dashboardScreen.recentEnergyHistory.title')}>
        <Container>{renderGraph(item.hasSufficientUsageData)}</Container>
      </Section>
      <ModalEnergyHistory show={modalEnergyHistory} onClose={modalEnergyHistoryClose} />
    </>
  );
};

export default RecentEnergyHistoryView;
