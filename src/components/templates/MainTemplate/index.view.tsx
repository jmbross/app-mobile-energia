import React from 'react';
import Sidebar from '@/organisms/Sidebar';
import Appbar from '@/organisms/Appbar';
import { IMainTemplateViewProps } from './index.types';
import { Wrapper, Container, Body, Left } from './index.styles';

const MainTemplateView = ({ hamburgerOpen, children }: IMainTemplateViewProps) => {
  return (
    <Wrapper>
      <Left hamburgerOpen={hamburgerOpen}>
        <Sidebar />
      </Left>
      <Container>
        <Appbar />
        <Body>{children}</Body>
      </Container>
    </Wrapper>
  );
};

export default MainTemplateView;
