import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';
import { Description as OriginDescription } from '@/organisms/StartRegister/index.styles';

export const Description = styled(OriginDescription)``;

export const Container = styled.div(
  ({ theme }) => css`
    padding: 20px 20px 33px;
    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor })};
    box-shadow: ${theme.shadow.web.boxShadow};

    &:not(:first-child) {
      margin-top: 20px;
    }
  `,
);

export const Question = styled(global.H5)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.primary[100] })};
    margin-bottom: 26px;
  `,
);

export const Thankyou = styled(global.H4)(
  ({ theme }) => css`
    ${helpers.textSet({ align: 'center' })}
    ${helpers.colorSet({ color: theme.colors.text[50] })};

    margin-top: 80px;
    margin-bottom: 40px;
  `,
);
