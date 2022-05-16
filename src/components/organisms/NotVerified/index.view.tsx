import React from 'react';
import { useTranslation } from 'react-i18next';
import { Description } from './index.styles';
import { NotVerifiedViewProps } from './index.types';

const NotVerifiedView = ({ programName }: NotVerifiedViewProps) => {
  const { t } = useTranslation('common');

  return <Description>{t(`programs.${programName}.notVerifiedScreen.description`)}</Description>;
};

export default NotVerifiedView;
