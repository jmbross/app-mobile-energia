import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  font: {
    type: {
      primary: 'Lato, helvetica, arial, sans-serif',
      secondary: '',
      code: '',
    },
    weight: {
      thin: 100,
      light: 300,
      regular: 400,
      bold: 800,
    },
    size: 16,
  },
  typography: {
    h1: { fontSize: 40, fontWeight: 750 },
    h2: { fontSize: 22, fontWeight: 750 },
    h3: { fontSize: 16, fontWeight: 750 },
    h4: { fontSize: 16, fontWeight: 750 },
    h5: { fontSize: 16, fontWeight: 400 },
    title: { fontSize: 16, fontWeight: 750 },
    subtitle: { fontSize: 14, fontWeight: 400 },
    description: { fontSize: 14, fontWeight: 400 },
    body: { fontSize: 16, fontWeight: 400 },
    caption: { fontSize: 14, fontWeight: 400 },
    button: { fontSize: 16, fontWeight: 400 },
    date: { fontSize: 14, fontWeight: 400 },
  },
  colors: {
    primary: {
      100: '#4d9021', // 5f902f
      75: '#47851E',
      50: '#edf4f5',
      25: '#d0d0d0', // disable
      0: '#fff', // transparent
    },
    secondary: {},
    palette: {
      highest: '#D7021A',
      lowest: '#47851E',
      lastWeek: '#336CD6',
      thisWeek: '#336CD6',
      noData: '#fff',
      your: '#f5a623',
      community: '#47851E',
    },
    text: {
      100: '#4A4A4A',
      80: '#757575',
      75: '#9b9b9b',
      50: '#d0d0d0',
      25: '#f5f5f5',
      0: '#fff',
    },
    status: {
      default: '#d0d0d0',
      success: '#6cd2bb',
      danger: '#ff7a7a',
      warning: '#fee071',
      info: '#ebebeb',
    },
    input: {
      background: '#fff',
      disabled: '#d0d0d0',
    },
    link: {
      default: '#3090e9',
      visited: '#101011',
      hover: 'darken(#496ddb, 10%)',
      active: '#d44076',
    },
    social: {
      google: '#fff',
      facebook: '#4460a0',
      apple: '#0b0b0a',
    },
    border: '#d0d0d0',
  },
  borders: {
    default: {
      radius: 2,
      width: 1,
    },
    focus: {
      radius: 4,
      width: 1,
    },
    code: {
      radius: 4,
      width: 1,
    },
    card: {
      radius: 10,
      width: 0,
    },
    button: {
      radius: 6,
      width: 2,
    },
  },
  shadow: {
    web: {
      boxShadow: '0 0 4px 0 #d0d0d0',
      backgroundColor: '#ffffff',
    },
    ios: {
      shadowColor: '#d0d0d0',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    android: {
      elevation: 2,
    },
  },
  margin: { sm: 4, lg: 6, xl: 8 },
  paddings: { sm: 4, lg: 6, xl: 8 },
};

export default theme;
