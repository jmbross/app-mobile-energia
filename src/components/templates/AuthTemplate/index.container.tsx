import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ReqSetting } from '@/apis/auth/types';
import { changeMomentLocale } from '@/helpers/LanguageHelper';
import { useEnrollment, useSetting } from '@/hooks/index';
import { RootState } from '@/stores/index';
import { Language, TempScale } from '@/types/setting';
import { GBCStatus } from '@/types/auth';
import AuthTemplateView from './index.view';
import { IAuthTemplateProps } from './index.types';

const AuthTemplateContainer = ({ children }: IAuthTemplateProps) => {
  const {
    auth: {
      userInfo,
      userInfo: { gbcStatus, zipcode },
    },
    setting,
    temporary: { appLogin },
  } = useSelector((state: RootState) => state);

  const { i18n } = useTranslation();
  const { fetchLanguage, fetchSetting } = useSetting();

  const { fetchProgramRequest } = useEnrollment();

  useEffect(() => {
    if (gbcStatus !== GBCStatus.completed && zipcode) {
      fetchProgramRequest(zipcode);
    }

    handleChangeLanguage(setting.language);
  }, []);

  const handleChangeLanguage = (language: Language) => {
    if (userInfo.gbcStatus === GBCStatus.none) {
      fetchLanguage(language);
    } else if (setting.language !== language) {
      // 로그인 상태에서는 서버에 언어 설정 변경하기
      const payload: ReqSetting = {
        language,
        tempScale: TempScale.celsius,
      };
      fetchSetting(payload);
    }

    i18n.changeLanguage(language.toLowerCase());
    changeMomentLocale(language);
  };

  return (
    <AuthTemplateView appLogin={appLogin} language={setting.language} onChangeLanguage={handleChangeLanguage}>
      {children}
    </AuthTemplateView>
  );
};

export default AuthTemplateContainer;
