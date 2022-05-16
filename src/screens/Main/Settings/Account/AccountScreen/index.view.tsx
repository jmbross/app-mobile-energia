import React from 'react';
import MainTemplate from '@/templates/MainTemplate';
import Account from '@/organisms/Account';
import SettingTemplate from '@/templates/SettingTemplate';

const AccountScreenView = () => {
  return (
    <MainTemplate>
      <SettingTemplate>
        <Account />
      </SettingTemplate>
    </MainTemplate>
  );
};

export default AccountScreenView;
