import React from 'react';
import { useTranslation } from 'react-i18next';
import Plotly from 'react-plotly.js';
import moment from 'moment';
import { images, theme } from '@/assets/styles';
import IconButton from '@/atoms/IconButton';
import Tabs from '@/molecules/Tabs';
import Legend from '@/molecules/Legend';
import Dropdown from '@/molecules/Dropdown';
import Section from '@/molecules/Section';
import { TimePeriod } from '@/types/usagePattern';
import { Wrapper, Header, LegendContainer, TimeList, GraphContainer, RightIcon } from './index.styles';
import { IUsagePatternViewProps } from './index.types';
import { Data, Layout } from 'plotly.js';
import { useWindowSize } from '@/helpers/WindowHelper';
import { event } from 'react-ga';

const UsagePatternView = ({
  items,
  tabLinkSelected,
  onTabClick,
  onRange,
  onPrevRange,
  onNextRange,
}: IUsagePatternViewProps) => {
  const { t } = useTranslation('common');
  const [width] = useWindowSize();

  const { timeList, range, graph, highestValue, lowestValue } = items;

  const renderTickText = () => {
    if (tabLinkSelected === TimePeriod.day) {
      return Array.from(
        {
          length: 24,
        },
        (_, hour) =>
          moment()
            .startOf('day')
            .hours(hour)
            .format(hour % 12 === 0 ? 'hh<br>A' : 'hh'),
      );
    }

    if (tabLinkSelected === TimePeriod.week) {
      return moment.weekdaysShort(true).map((day) => day.toUpperCase());
    }
    if (tabLinkSelected === TimePeriod.month) {
      return Array.from({ length: moment(range, 'MMMM YYYY').daysInMonth() }, (v, k) => k + 1);
    }

    return moment.monthsShort().map((day) => day.toUpperCase());
  };

  const renderBarWidth = () => {
    if (tabLinkSelected === TimePeriod.day || tabLinkSelected === TimePeriod.month) {
      return 60 * renderTickText().length;
    }

    return 110 * renderTickText().length;
  };

  const renderBarGap = () => {
    if (tabLinkSelected === TimePeriod.day || tabLinkSelected === TimePeriod.month) {
      return 0.4;
    }

    return 0.5;
  };

  const data: Data[] = [
    {
      type: 'bar',
      y: graph,
      marker: {
        color: graph.map((val: number) => {
          if (highestValue === val) return theme.colors.palette.highest;
          if (lowestValue === val) return theme.colors.palette.lowest;
          return theme.colors.palette.lastWeek;
        }),
      },
    },
  ];

  const layout = {
    width: renderBarWidth(),
    height: 450,
    bargap: renderBarGap(),
    dragmode: false,
    margin: {
      t: 20,
      r: 20,
      b: 50,
      l: 20,
      pad: 10,
    },
    xaxis: {
      fixedrange: true,
      ticktext: renderTickText(),
      tickvals: items.graph.map((val: number, idx: number) => idx),
    },
    yaxis: { fixedrange: true, showticklabels: false, showgrid: false, zeroline: false },
  };

  const LegendSection = () => (
    <LegendContainer>
      <Legend
        dotColor={theme.colors.palette.lastWeek}
        title={t('screens.main.usagePattern.usagePatternScreen.graph.legend.energyUse')}
      />
      <Legend
        dotColor={theme.colors.palette.highest}
        title={t('screens.main.usagePattern.usagePatternScreen.graph.legend.highest')}
        marginLeft="20px"
      />
      <Legend
        dotColor={theme.colors.palette.lowest}
        title={t('screens.main.usagePattern.usagePatternScreen.graph.legend.lowest')}
        marginLeft="20px"
      />
    </LegendContainer>
  );

  const makeTimeList = () => {
    if (timeList.length === 1 && timeList[0] === '') {
      return [];
    }

    return timeList.map((text: string) => ({ id: text, name: text, text }));
  };

  const currentIndex = timeList.findIndex((text: string) => text === range);
  const isSidebarVisible = width < 1000;
  const maxOverlapWidth = width < 500;


  

  return (
    <Wrapper>
      <Header>
        <TimeList>
          <IconButton
            icon={images.arrowLeftBlack}
            marginRight={10}
            disabled={currentIndex === timeList.length - 1}
            onClick={onPrevRange}
          />
          <Dropdown
            items={makeTimeList()}
            placeholder="No Data"
            values={[range]}
            onChange={(name) => onRange(name[0] as string)}
          />
          <RightIcon>
            <IconButton
              icon={images.arrowLeftBlack}
              marginLeft={10}
              disabled={currentIndex === 0}
              onClick={onNextRange}
            />
          </RightIcon>
        </TimeList>
        <Tabs
          tabs={[
            {
              title: t('screens.main.usagePattern.usagePatternScreen.graph.filter.day'),
              tabName: TimePeriod.day,
            },
            {
              title: t('screens.main.usagePattern.usagePatternScreen.graph.filter.week'),
              tabName: TimePeriod.week,
            },
            {
              title: t('screens.main.usagePattern.usagePatternScreen.graph.filter.month'),
              tabName: TimePeriod.month,
            },
            {
              title: t('screens.main.usagePattern.usagePatternScreen.graph.filter.year'),
              tabName: TimePeriod.year,
            },
          ]}
          selected={tabLinkSelected}
          onClick={(val) => onTabClick(val as TimePeriod)}
        />
      </Header>
      <Section
      
        title={t('screens.main.usagePattern.usagePatternScreen.title')}
        marginTop="20px"
        more={!maxOverlapWidth && <LegendSection />}
      >
        <GraphContainer>
          <Plotly
            data={data}
            layout={layout as Partial<Layout>}
            config={{ displayModeBar: false, scrollZoom: true,}}
            style={{
              maxWidth: `calc(100vw - ${isSidebarVisible ? '100' : '420'}px)`,
              overflow: 'scroll',
            }}
            />
          </GraphContainer>
        {maxOverlapWidth && <LegendSection />}
      </Section>
    </Wrapper>
  );
};

export default UsagePatternView;
