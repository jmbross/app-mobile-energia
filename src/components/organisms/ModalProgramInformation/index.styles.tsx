import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { Description as OriginDescription } from '@/organisms/StartRegister/index.styles';

export const Description = styled(OriginDescription)``;

export const More = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
    margin-bottom: 44px;
  `,
);
