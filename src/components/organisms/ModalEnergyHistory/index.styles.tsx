import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';

export const Title = styled(global.H2)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    margin-bottom: 30px;
  `,
);

export const Description = styled(global.Title)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    & > p {
      &:not(:first-child) {
        margin-top: 16px;
      }
    }

    i {
      ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })};
      font-style: normal;
    }

    span {
      ${helpers.colorSet({ color: theme.colors.primary[100] })};
    }
  `,
);
