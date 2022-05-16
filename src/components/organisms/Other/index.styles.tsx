import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  padding: 30px;
`;

export const Title = styled(global.H5)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[100] })};
    margin-bottom: 15px;
  `,
);
