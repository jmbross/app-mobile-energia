import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    padding: 30px 25px;

    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor })};
    ${helpers.borderSet({ borderRadius: theme.borders.default.radius })};
    box-shadow: ${theme.shadow.web.boxShadow};
  `,
);

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};

  height: 400px;
`;

export const Logo = styled.div`
  width: 100px;
  height: 109px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
    margin-top: 20px;
  `,
);

export const Date = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h2.fontSize, fontWeight: theme.font.weight.bold, align: 'center' })};
  `,
);
