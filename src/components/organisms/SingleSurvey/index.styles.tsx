import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';

export const Container = styled.div``;

export const Question = styled(global.H3)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.primary[100] })};

    margin-bottom: 34px;
  `,
);
