import React from 'react';
import { useTranslation } from 'react-i18next';
import Plotly from 'react-plotly.js';
import { theme } from '@/assets/styles';
import Usage from '@/molecules/Usage';
import Legend from '@/molecules/Legend';
import { UnitHelper } from '@/helpers/UnitHelper';
import { Wrapper, Header, Body, Title, GraphContainer, LegendContainer } from './index.styles';
import { IDRQuickViewViewProps } from './index.types';

const DRQuickViewView = ({ item }: IDRQuickViewViewProps) => {
  const { t } = useTranslation('common');

  const {
    actualRequestUsage,
    quickViewData: { hadReduced, typicalDayUsage, moneyEarned, changeInUsage },
  } = item;

  const renderTick = (value: number, color: string) => {
    return `<span style="color: ${color}">
        <b>${UnitHelper.renderUnitValue(value, 'wh')}</b>
      </span>`;
  };

  const data = [
    {
      name: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.typical'),
      type: 'bar',
      x: [0],
      y: [typicalDayUsage],
      marker: {
        color: theme.colors.palette.lastWeek,
      },
      width: [0.3],
    },
    {
      name: t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.legend.energyEvent'),
      type: 'bar',
      x: [1],
      y: [actualRequestUsage],
      marker: {
        color: theme.colors.palette.lowest,
      },
      width: [0.3],
    },
  ];

  const layout = {
    dragmode: false,
    margin: {
      l: 20,
      r: 20,
      b: 50,
      t: 50,
      pad: 10,
    },
    xaxis: {
      ticktext: [
        renderTick(typicalDayUsage, theme.colors.palette.lastWeek),
        renderTick(actualRequestUsage, theme.colors.palette.lowest),
      ],
      tickvals: [0, 1],
      tickcolors: [theme.colors.palette.lastWeek, theme.colors.palette.lowest],
    },
    yaxis: { fixedrange: true, showticklabels: false, showgrid: false, zeroline: false },
    showlegend: false,
  };

  return (
    <Wrapper>
      <Header>
        <Usage
          value={changeInUsage}
          valueStrong
          valueColor={hadReduced ? theme.colors.primary[75] : theme.colors.palette.highest}
          unit="wh"
          arrow={hadReduced ? '↓' : '↑'}
          description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.reduction')}
        />
        <Usage
          value={moneyEarned}
          valueStrong
          valueColor={theme.colors.primary[75]}
          unit="money"
          description={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.moneyEarned')}
        />
      </Header>
      <Body>
        <Title>{t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.title')}</Title>
        <GraphContainer>
          <Plotly
            data={data}
            layout={layout}
            config={{ displayModeBar: false }}
            style={{ width: '100%', height: 350 }}
          />
        </GraphContainer>
        <LegendContainer>
          <Legend
            dotColor={theme.colors.palette.lastWeek}
            title={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.typicalDay')}
          />
          <Legend
            dotColor={theme.colors.palette.lowest}
            title={t('screens.main.savingsEvents.savingsEventsHistoryScreen.historyDetail.graph.request')}
          />
        </LegendContainer>
      </Body>
    </Wrapper>
  );
};

export default DRQuickViewView;
