import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  height: 700px;
  overflow: auto;
  margin: 0 -30px;
  padding: 0 30px;
`;

export const NoData = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, fontWeight: theme.typography.title.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
    margin-top: 20px;
  `,
);
