import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReqSetting } from '@/apis/auth/types';
import { changeMomentLocale } from '@/helpers/LanguageHelper';
import { RootState } from '@/stores/index';
import useSetting from '@/hooks/useSetting';
import { Language, TempScale } from '@/types/setting';
import OtherView from './index.view';

const OtherContainer = () => {
  const { setting } = useSelector((state: RootState) => state);

  const { i18n } = useTranslation();
  const { fetchSetting } = useSetting();

  const handleLanguage = (language: Language) => {
    if (setting.language === language) {
      return;
    }

    i18n.changeLanguage(language.toLowerCase());
    changeMomentLocale(language);

    const payload: ReqSetting = {
      language,
      tempScale: TempScale.celsius,
    };
    fetchSetting(payload);
  };

  return <OtherView language={setting.language} onLanguage={handleLanguage} />;
};

export default OtherContainer;
