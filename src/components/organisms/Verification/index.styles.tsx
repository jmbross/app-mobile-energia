import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';
import { Description as OriginDescription } from '@/organisms/StartRegister/index.styles';

export const Description = styled(OriginDescription)``;

export const Tip = styled(global.Caption)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.primary[75] })};
    text-align: left;
  `,
);
