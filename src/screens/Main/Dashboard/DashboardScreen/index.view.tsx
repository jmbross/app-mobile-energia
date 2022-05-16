import React from 'react';
import GBCStatus from '@/organisms/GBCStatus';
import RecentEnergyHistory from '@/organisms/RecentEnergyHistory';
import Reminders from '@/organisms/Reminders';
import Achievement from '@/organisms/Achievement';
import GridEmissions from '@/organisms/GridEmissions';
import EnvironmentImpact from '@/organisms/EnvironmentImpact';
import MainTemplate from '@/templates/MainTemplate';
import { IDashboardScreenViewProps } from './index.types';
import { FirstColumn, Grid, GridItem, SecondColumn, GridRight } from './index.styles';

const DashboardScreenView = ({ isAuthenticated }: IDashboardScreenViewProps) => {
  return (
    <MainTemplate>
      {isAuthenticated ? (
        <Grid>
          <FirstColumn>
            <GridItem>
              <RecentEnergyHistory />
            </GridItem>
            <GridItem>
              <Reminders />
            </GridItem>
          </FirstColumn>
          <SecondColumn>
            <GridItem>
              <Achievement />
              <GridItem>
                <EnvironmentImpact />
              </GridItem>
            </GridItem>
            <GridItem>
              <GridEmissions />
            </GridItem>
          </SecondColumn>
        </Grid>
      ) : (
        <GBCStatus />
      )}
    </MainTemplate>
  );
};

export default DashboardScreenView;
