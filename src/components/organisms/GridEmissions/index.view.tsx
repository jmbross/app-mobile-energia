import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '@/molecules/Section';
import { animated } from 'react-spring';
import {
  Container,
  Number,
  RowView,
  TextLow,
  TextHigh,
  TitleSub,
  TitleSub2,
  Description,
  PoweredBy,
} from './index.styles';
import { IGridEmissionsViewProps } from './index.types';
import './gridEmissionsContainer.css';

const GridEmissionsView = ({ item, mainState }: IGridEmissionsViewProps) => {
  const { t } = useTranslation('common');

  // var fill;//this will be the percentage number
  const fill = item.relativeMarginalOperatingEmissionsRate < 1 ? 0 : item.relativeMarginalOperatingEmissionsRate;

  const fillColor = (value: number) => {
    const val = value / 100;
    // value from 0 to 1
    const hue = ((1 - val) * 120).toString(10);
    return ['hsl(', hue, ',70%,45%)'].join('');
  };
  return (
    <Section title={t('screens.main.dashboard.dashboardScreen.gridEmissionsContainer.Cont_Title')}>
      <Container>
        <TitleSub>
          {t('screens.main.dashboard.dashboardScreen.gridEmissionsContainer.Cont_TopCont_SubTitle_Name')}
          {mainState.currentSite?.city}, {mainState.currentSite?.state}
        </TitleSub>
        <TitleSub2>
          {fill > 0
            ? t('screens.main.dashboard.dashboardScreen.gridEmissionsContainer.Cont_DataCont_Description_Text')
            : t(`screens.main.dashboard.dashboardScreen.gridEmissionsContainer.Cont_DataCont_Description_Text_No_Data`)}
        </TitleSub2>

        <Description>
          <div className="column">
            <div className="guage">
              <div id="gauge_container">
                <p className="">
                  <Number id="emission_count">{fill === 0 ? 'N/A' : fill}</Number>
                </p>
                <div id="gauge_disabled" className="">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    height="210px"
                    viewBox="0 0 280 210"
                    enableBackground="new 0 0 280 210"
                    xmlSpace="preserve"
                    className="svgGridEmissions"
                  >
                    <g>
                      <linearGradient
                        id="SVGID_1_"
                        gradientUnits="userSpaceOnUse"
                        //  x1="15.0107" y1="99.061" x2="265.0068" y2="99.061"
                      >
                        <stop offset="1" style={{ stopColor: fillColor(fill) }} />
                        {/* <stop offset="0" style={{ stopColor: "#8EC641" }}></stop>
                      <stop offset="0.5" style={{ stopColor: "#FFB400" }}></stop>
                      <stop offset="1" style={{ stopColor: "#B40000" }}></stop> */}
                      </linearGradient>
                      <path
                        fill="url(#SVGID_1_)"
                        d="M257.323,183.129l-37.543-13.801c16.171-43.991-6.462-92.936-50.453-109.108
		c-43.989-16.171-92.937,6.462-109.107,50.452c-6.918,18.818-6.951,39.558-0.094,58.4l-37.588,13.68
		c-10.084-27.708-10.035-58.208,0.138-85.881c23.781-64.693,95.762-97.976,160.453-74.195
		C247.821,46.459,281.105,118.438,257.323,183.129z"
                      />
                    </g>
                  </svg>
                </div>
                <div id="gauge">
                  {/* this is the white/grey color, whatever the value is this should fill from right to left(value should be 100 - emissions value) */}
                  <animated.svg
                    strokeDasharray={403}
                    strokeDashoffset={fill * 4.03}
                    className="ct-chart-donut"
                    style={{ width: '280px', height: '210px' }}
                  >
                    <g className="ct-series pie">
                      <animated.path className="ct-slice-donut" d="M238.552,176.228A105,105,0,1,0,41.332,175.912" />
                    </g>
                    <g />
                  </animated.svg>
                </div>
                {/* <div
                id="gauge_ring">
                <svg
                  width="280px"
                  height="252px"
                  className="ct-chart-donut"
                  style={{ width: "280px", height: "252px" }}
                >
                  <g className="ct-series ct-series-a">
                    <path
                      d="M225.412,157.398A91,91,0,1,0,54.488,157.124"
                      className="ct-slice-donut"
                      style={{ strokeWidth: "60px", strokeDashoffset: "403.5238342285156px" }}></path>
                  </g>
                </svg>
              </div> */}
                <div id="gauge_array">
                  <svg
                    height="210px"
                    className="ct-chart-donut svgGridEmissions"
                    style={{ width: '280px', height: '210px' }}
                  >
                    <g className="ct-series ct-series-a">
                      <path
                        d="M238.552,176.228A105,105,0,1,0,41.332,175.912"
                        className="ct-slice-donut"
                        style={{ strokeWidth: '60px' }}
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <RowView>
                <TextLow>
                  {t('screens.main.dashboard.dashboardScreen.gridEmissionsContainer.Cont_DataCont_Low')}
                </TextLow>
                <TextHigh>
                  {t('screens.main.dashboard.dashboardScreen.gridEmissionsContainer.Cont_DataCont_High')}
                </TextHigh>
              </RowView>
            </div>
          </div>
        </Description>
        <PoweredBy>{t('screens.main.dashboard.dashboardScreen.gridEmissionsContainer.Cont_BottomCont')}</PoweredBy>
      </Container>
    </Section>
  );
};

export default GridEmissionsView;
