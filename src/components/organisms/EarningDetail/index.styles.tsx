import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h2.fontSize, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
    margin-top: 20px;
  `,
);

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
  height: 670px;
`;

export const ItemContainer = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};

  width: 260px;
  height: 140px;
`;

export const Item = styled.p(
  ({ theme }) => css`
    margin-top: 20px;

    ${helpers.borderSet({
      borderRadius: theme.borders.default.radius,
      borderWidth: theme.borders.default.width,
      borderColor: theme.colors.border,
    })};
  `,
);

export const NoDataContainer = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
  height: 750px;
`;

export const NoData = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, fontWeight: theme.typography.title.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
  `,
);
