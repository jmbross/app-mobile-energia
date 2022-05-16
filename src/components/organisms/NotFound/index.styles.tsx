import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    ${helpers.colorSet({ backgroundColor: theme.colors.text[25] })};
    height: 100vh;
  `,
);

export const Container = styled.div`
  height: 100%;
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const Logo = styled.div`
  margin-top: 54px;
  margin-bottom: 38px;
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: 30, fontWeight: theme.font.weight.bold, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: 26, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);
