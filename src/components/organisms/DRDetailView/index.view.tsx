import React from 'react';
import { useTranslation } from 'react-i18next';
import Plotly from 'react-plotly.js';
import { theme } from '@/assets/styles';
import Legend from '@/molecules/Legend';
import { Wrapper, Title, GraphContainer, LegendContainer } from './index.styles';
import { IDDRDetailViewViewProps } from './index.types';

const DRDetailViewView = ({ items }: IDDRDetailViewViewProps) => {
  const { t } = useTranslation('common');

  // const renderBarWidth = () => {
  //   return 60 * items.typicalUsage.length;
  // };

  const data = [
    {
      name: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.typical'),
      type: 'bar',
      x: items.typicalUsage.map(({ time }) => time),
      y: items.typicalUsage.map(({ usage }) => usage),
      marker: {
        color: theme.colors.palette.thisWeek,
      },
    },
    {
      name: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.energyEvent'),
      type: 'bar',
      x: items.userEnergyUsage.map(({ time }) => time),
      y: items.userEnergyUsage.map(({ usage }) => usage),
      marker: {
        color: items.userEnergyUsage.map(({ inRequestPeriod }) =>
          inRequestPeriod ? theme.colors.palette.lowest : theme.colors.palette.lastWeek,
        ),
      },
    },
    {
      name: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.bnaEnergyEvent'),
      type: 'bar',
      x: [0],
      y: [0],
      marker: {
        color: theme.colors.palette.lowest,
      },
    },
  ];

  const layout = {
    // width: renderBarWidth(),
    dragmode: false,
    margin: {
      l: 20,
      r: 20,
      b: 50,
      t: 50,
      pad: 10,
    },
    legend: {
      x: 0.4,
      y: -0.5,
    },
    xaxis: { automargin: true },
    yaxis: { fixedrange: true, showticklabels: false, showgrid: false, zeroline: false },
    showlegend: false,
  };

  return (
    <Wrapper>
      <Title>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.title')}</Title>
      <GraphContainer>
        <Plotly data={data} layout={layout} config={{ displayModeBar: false }} style={{ width: '100%', height: 430 }} />
      </GraphContainer>
      <LegendContainer>
        <Legend
          dotColor={theme.colors.palette.lastWeek}
          title={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.typical')}
        />
        <Legend
          dotColor={theme.colors.palette.thisWeek}
          title={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.bnaEnergyEvent')}
        />
        <Legend
          dotColor={theme.colors.palette.lowest}
          title={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.energyEvent')}
        />
      </LegendContainer>
    </Wrapper>
  );
};

export default DRDetailViewView;
