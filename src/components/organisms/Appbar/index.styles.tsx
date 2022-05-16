import styled, { css } from 'styled-components';
import { helpers, media } from '@/assets/styles';

export const Wrapper = styled.div``;

export const Container = styled.div(
  ({ theme }) => css`
    ${helpers.flexSet('row', 'space-between', 'center')};
    background: ${theme.colors.primary[0]};

    ${media.md`
      padding: 20px;
    `}
  `,
);

export const Left = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};
`;

export const Right = styled.div(
  ({ theme }) => css`
    ${helpers.flexSet('row', 'space-between', 'center')};
    ${helpers.textSet({
      fontSize: theme.typography.title.fontSize,
      fontWeight: theme.font.weight.regular,
    })};

    color: #8ca0b3;
  `,
);
export const Date = styled.div`
  display: none;

  ${media.md`
    display: block;
  `}
`;

export const NoSite = styled.p`
  margin-right: 8px;
`;

export const Hamburger = styled.div`
  display: block;

  ${media.lg`
    display: none;
    margin-right: 10px;
  `}
`;
