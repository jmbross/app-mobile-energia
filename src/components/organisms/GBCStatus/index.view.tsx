import React from 'react';
import i18next from 'i18next';
import GBCInComplete from '@/organisms/GBCInComplete';
import GBCInProgress from '@/organisms/GBCInProgress';
import GBCPending from '@/organisms/GBCPending';
import { GBCStatus } from '@/types/auth';
import { IGBCStatusViewProps } from './index.types';
import { Container, Wrapper } from './index.styles';

const GBCStatusView = ({ programName, gbcStatus }: IGBCStatusViewProps) => {
  const isPending = i18next.exists(`common:programs.${programName}.dashboardScreen.pending`);

  return (
    <Wrapper>
      <Container>
        {gbcStatus === GBCStatus.incomplete && <GBCInComplete />}
        {[GBCStatus.inProgress, GBCStatus.stillInProgress].includes(gbcStatus) && <GBCInProgress />}
      </Container>
      <Container>{!isPending && <GBCPending />}</Container>
    </Wrapper>
  );
};

export default GBCStatusView;
