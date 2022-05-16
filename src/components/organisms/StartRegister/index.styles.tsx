import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);
