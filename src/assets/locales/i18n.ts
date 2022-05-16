import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/* eslint-disable global-require */
i18n.use(initReactI18next).init({
  debug: false,
  lng: 'eng',
  fallbackLng: 'eng',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    eng: {
      common: require('./eng/common.json'),
    },
    esp: {
      common: require('./esp/common.json'),
    },
    cn: {
      common: require('./cn/common.json'),
    },
  },
});

export default i18n;
