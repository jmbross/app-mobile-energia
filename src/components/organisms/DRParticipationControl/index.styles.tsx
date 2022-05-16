import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};
  margin-top: 20px;
`;

export const More = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-top: 44px;
    & > span {
      color: ${theme.colors.primary[75]};
    }
  `,
);
