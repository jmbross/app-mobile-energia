import React from 'react';
import MySites from '@/organisms/MySites';
import MainTemplate from '@/templates/MainTemplate';
import SettingTemplate from '@/templates/SettingTemplate';

const SettingScreenView = () => {
  return (
    <MainTemplate>
      <SettingTemplate>
        <MySites />
      </SettingTemplate>
    </MainTemplate>
  );
};

export default SettingScreenView;
