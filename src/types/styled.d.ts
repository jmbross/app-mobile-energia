import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      type: {
        primary: string;
        secondary: string;
        code: string;
      };
      weight: {
        thin: number;
        light: number;
        regular: number;
        bold: number;
      };
      size: number;
    };
    typography: {
      h1: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      h2: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      h3: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      h4: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      h5: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      title: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      subtitle: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      description: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      body: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      date: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      caption: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
      button: {
        fontFamily?: string;
        fontSize: number;
        fontWeight: number;
        lineHeight?: number;
        letterSpacing?: number;
      };
    };
    colors: {
      primary: { [key: string]: string };
      secondary: { [key: string]: string };
      palette: { [key: string]: string };
      text: { [key: string]: string };
      status: {
        default: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
      };
      input: {
        disabled: string;
        background: string;
      };
      link: {
        default: string;
        visited: string;
        hover: string;
        active: string;
      };
      social: {
        google?: string;
        apple?: string;
        facebook?: string;
        twitter?: string;
        kakao?: string;
        naver?: string;
      };
      border: string;
    };
    borders: {
      default: {
        radius: number;
        width: number;
      };
      focus: {
        radius: number;
        width: number;
      };
      code: {
        radius: number;
        width: number;
      };
      card: {
        radius: number;
        width: number;
      };
      button: {
        radius: number;
        width: number;
      };
    };
    shadow: {
      web: {
        boxShadow: string;
        backgroundColor: string;
      };
      ios: {
        shadowColor: string;
        shadowOffset: {
          width: number;
          height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
      };
      android: {
        elevation: number;
      };
    };
    margin: {
      sm: number;
      lg: number;
      xl: number;
    };
    paddings: {
      sm: number;
      lg: number;
      xl: number;
    };
  }
}
