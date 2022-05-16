import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleWrapperProps } from './index.types';

export const Wrapper = styled.div<IStyleWrapperProps>(
  ({ marginTop, marginBottom }) => css`
    ${helpers.marginSet({ marginTop, marginBottom })};
  `,
);

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize, fontWeight: theme.font.weight.bold })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    margin-bottom: 10px;
  `,
);
