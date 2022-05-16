import React from 'react';
import MainTemplate from '@/templates/MainTemplate';
import About from '@/organisms/About';
import SettingTemplate from '@/templates/SettingTemplate';

const AboutScreenView = () => {
  return (
    <MainTemplate>
      <SettingTemplate>
        <About />
      </SettingTemplate>
    </MainTemplate>
  );
};

export default AboutScreenView;
