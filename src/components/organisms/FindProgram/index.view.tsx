import React from 'react';
import { useTranslation } from 'react-i18next';
import { Description } from './index.styles';

const FindProgramView = () => {
  const { t } = useTranslation('common');

  return <Description>{t('screens.enrollment.startRegisterScreen.description')}</Description>;
};

export default FindProgramView;
