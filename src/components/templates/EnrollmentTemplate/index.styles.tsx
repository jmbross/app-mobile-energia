import styled, { css } from 'styled-components';
import { helpers, media } from '@/assets/styles';
import {
  IStyleButtonsContainerProps,
  IStyleContainerProps,
  IStyleNavigationPath,
  IStyleWrapperProps,
} from './index.types';

export const Wrapper = styled.div<IStyleWrapperProps>(
  ({ maxWidth = '400px', margin = '0px' }) => css`
    ${helpers.flexSet('column', 'center', 'center')};

    width: 100%;
    max-width: ${maxWidth};
    min-height: 680px;

    margin-bottom: 50px;

    ${media.sm`
      margin-bottom: initial;
    `}

    ${media.xl`
      margin: ${margin};
    `}
  `,
);

export const Container = styled.div<IStyleContainerProps>(
  ({ theme, appLogin, showBoxShadow = true }) => css`
    ${!appLogin &&
    css`
      border-radius: ${theme.borders.default.radius};
      ${showBoxShadow ? `box-shadow: ${theme.shadow.web.boxShadow}` : ''};
    `}
    background: ${theme.shadow.web.backgroundColor};

    width: 100%;
    height: 100%;
  `,
);

export const Logo = styled.div`
  height: 48px;

  > img {
    height: 100%;
  }
`;

export const Header = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};

  position: relative;
  height: 160px;
`;

export const Body = styled.div`
  ${helpers.flexSet('column', 'space-between')};

  min-height: 520px;

  padding: 0 30px 50px 30px;

  ${media.sm`
    padding: 0 60px 100px 60px;
  `}
`;

export const Left = styled.div`
  position: absolute;
  left: 20px;
  top: 60px;
`;

export const Title = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.h5.fontSize};
    color: ${theme.colors.text[100]};
    text-align: center;
  `,
);

export const NavigationPath = styled.p<IStyleNavigationPath>(
  ({ theme, underline }) => css`
    font-size: ${theme.typography.h3.fontSize};
    color: ${theme.colors.primary[100]};

    margin-bottom: 20px;

    ${underline &&
    css`
      text-decoration: underline;
      text-decoration-color: ${theme.colors.primary[100]};
      text-underline-offset: 5px;
    `};
  `,
);

export const Footer = styled.div`
  max-width: 400px;
  width: 100%;
  align-self: center;
`;

export const ButtonsContainer = styled.div<IStyleButtonsContainerProps>(
  ({ padding = 0 }) => `
  padding: ${padding};
`,
);
