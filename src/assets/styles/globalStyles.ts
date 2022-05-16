import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { theme } from '@/assets/styles';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  body {
    font-family: ${theme.font.type.primary};
    height: 100vh;
  }

  #root {
    height: 100vh;
  }

  a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    background: transparent;
    text-decoration: none;
    cursor: pointer;
    outline: none;

    &:link {
      color: ${theme.colors.link.default};
    }

  }
  
  input,
  textarea {
    appearance: none;
    box-shadow: none;
    box-sizing: border-box;
    margin: 0;
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }

  textarea {
    overflow-x: hidden;
    overflow-y: auto;
    resize: none;
  }

  p, button {
    padding: 0;
    margin: 0;
    outline: 0;
  }
`;

export default GlobalStyles;
