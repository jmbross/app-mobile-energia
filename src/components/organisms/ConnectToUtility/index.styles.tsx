import styled, { css } from 'styled-components';
import { Description as OriginDescription } from '@/organisms/StartRegister/index.styles';

export const Information = styled(OriginDescription)(
  ({ theme }) => css`
    font-size: ${theme.typography.description.fontSize};
  `,
);
