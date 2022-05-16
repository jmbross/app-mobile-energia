import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import { Description } from './index.styles';
import { IWebStoreViewProps } from './index.types';

const WebStore = ({ onClickVisit }: IWebStoreViewProps) => {
  const { t } = useTranslation('common');
  const links = t('programs.scp.webStoreScreen.links', { returnObjects: true });

  return (
    <>
      <Description>{t('programs.scp.webStoreScreen.description')}</Description>
      {Object.values(links).map((key) => (
        <Button
          key={Object.keys(key)[0]}
          label={Object.keys(key)[0]}
          borderRadius={100}
          backgroundColor={theme.colors.primary[100]}
          color={theme.colors.text[0]}
          fontSize={theme.typography.button.fontSize}
          height={46}
          marginTop={20}
          onClick={() => onClickVisit(Object.values(key)[0])}
        />
      ))}
    </>
  );
};

export default WebStore;
