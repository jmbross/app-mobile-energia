import React from 'react';
import MainTemplate from '@/templates/MainTemplate';
import MySites from '@/organisms/MySites';
import SettingTemplate from '@/templates/SettingTemplate';

const MySitesScreenView = () => {
  return (
    <MainTemplate>
      <SettingTemplate>
        <MySites />
      </SettingTemplate>
    </MainTemplate>
  );
};

export default MySitesScreenView;
