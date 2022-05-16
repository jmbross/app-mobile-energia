import styled, { css } from 'styled-components';
import { global, helpers, media } from '@/assets/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 680px;
    margin-bottom: 100px;

    border-radius: ${theme.borders.default.radius};
    box-shadow: ${theme.shadow.web.boxShadow};
    background: ${theme.shadow.web.backgroundColor};

    ${media.sm`
      width: 400px;
      margin-bottom: initial;
    `}
  `,
);

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};

  padding: 75px 30px;

  ${media.sm`
    padding: 75px;
  `}
`;

export const Env = styled.p`
  margin: 0 auto;
  white-space: pre;
`;

export const Logo = styled.div`
  height: 100px;

  ${media.md`
    height: 150px;
  `}

  & > img {
    height: 100%;
  }
`;

export const Title = styled(global.H2)(
  ({ theme }) => css`
    ${helpers.textSet({ align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.primary[100] })};

    margin-top: 95px;
    margin-bottom: 55px;
  `,
);
