import React from 'react';
import ProgramInformation from '@/organisms/ProgramInformation';
import DRStatus from '@/organisms/DRStatus';
import EnergySavingIdeas from '@/organisms/EnergySavingIdeas';
import PerformanceToDate from '@/organisms/PerformanceToDate';
import SavingsEventsHistory from '@/organisms/SavingsEventsHistory';
import SavingsEventsHistoryDetail from '@/organisms/SavingsEventsHistoryDetail';
import GBCStatus from '@/organisms/GBCStatus';
import MainTemplate from '@/templates/MainTemplate';
import { Grid, GridItem, GridLeft, GridRight } from './index.styles';
import { ISavingsEventsScreenViewProps } from './index.types';

const SavingsEventsScreenView = ({ isAuthenticated }: ISavingsEventsScreenViewProps) => {
  return (
    <MainTemplate>
      {isAuthenticated ? (
        <Grid>
          <GridItem area="gl">
            <GridLeft>
              <GridItem area="la">
                <ProgramInformation />
              </GridItem>
              <GridItem area="lb">
                <DRStatus />
              </GridItem>
              <GridItem area="lc">
                <EnergySavingIdeas />
              </GridItem>
            </GridLeft>
          </GridItem>
          <GridItem area="gr">
            <GridRight>
              <GridItem area="ra">
                <PerformanceToDate />
              </GridItem>
              <GridItem area="rb">
                <SavingsEventsHistory />
              </GridItem>
              <GridItem area="rc">
                <SavingsEventsHistoryDetail />
              </GridItem>
            </GridRight>
          </GridItem>
        </Grid>
      ) : (
        <GBCStatus />
      )}
    </MainTemplate>
  );
};

export default SavingsEventsScreenView;
