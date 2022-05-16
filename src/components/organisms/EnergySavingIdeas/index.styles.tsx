import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div``;

export const Container = styled.div``;

export const Header = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};
  margin-top: 35px;
  height: 50px;

  button {
    height: 100%;
  }

  img {
    height: 100%;
  }
`;

export const Body = styled.div(
  ({ theme }) => css`
    ${helpers.borderSet({
      borderDirection: 'top',
      borderWidth: theme.borders.default.width,
      borderColor: theme.colors.border,
    })};

    margin-top: 20px;
    padding-top: 20px;
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize, align: 'center' })};
  `,
);

export const Suggest = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
    margin-top: 3px;
  `,
);
