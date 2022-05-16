import React from 'react';
import Welcome from '@/organisms/Welcome';
import Login from '@/organisms/Login';
import AuthTemplate from '@/templates/AuthTemplate';
import { Wrapper } from './index.styles';

const WelcomeView = () => {
  return (
    <AuthTemplate>
      <Wrapper>
        <Welcome />
        <Login />
      </Wrapper>
    </AuthTemplate>
  );
};

export default WelcomeView;
