import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    & > p {
      &:not(:first-child) {
        margin-top: 16px;
      }
    }
  `,
);

export const AgreeBox = styled.div(
  ({ theme }) => css`
    ${helpers.flexSet('row', 'flex-start', 'flex-start')};
    ${helpers.borderSet({
      borderRadius: theme.borders.default.radius,
      borderWidth: theme.borders.default.width,
      borderColor: theme.colors.primary[100],
    })}
    ${helpers.colorSet({ backgroundColor: theme.colors.primary[50] })};

    padding: 12px 20px;
    margin: 16px 0;
  `,
);

export const Terms = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
    margin-left: 10px;
  `,
);

export const More = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
    margin-bottom: 44px;
  `,
);
