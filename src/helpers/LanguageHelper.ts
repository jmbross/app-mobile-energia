import moment from 'moment';
import { Language } from '@/types/setting';

export const changeMomentLocale = (language: Language) => {
  let locale: string;
  switch (language) {
    case Language.cn:
      locale = 'zh_cn';
      break;

    case Language.esp:
      locale = 'es';
      break;

    case Language.eng:
    default:
      locale = 'en';
      break;
  }

  moment.locale(locale);
};
