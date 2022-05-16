import React from 'react';
import MainTemplate from '@/templates/MainTemplate';
import Other from '@/organisms/Other';
import SettingTemplate from '@/templates/SettingTemplate';

const OtherScreenView = () => {
  return (
    <MainTemplate>
      <SettingTemplate>
        <Other />
      </SettingTemplate>
    </MainTemplate>
  );
};

export default OtherScreenView;
