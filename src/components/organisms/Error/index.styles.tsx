import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.text[25]};
  `,
);

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
  height: 100%;
`;

export const Logo = styled.div`
  margin-top: 54px;
  margin-bottom: 38px;
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: 36, fontWeight: theme.font.weight.bold, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: 28, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-top: 13px;
  `,
);
