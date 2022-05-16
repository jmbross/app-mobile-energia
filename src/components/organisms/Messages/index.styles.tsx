import styled, { css } from 'styled-components';
import { helpers, media } from '@/assets/styles';

export const Wrapper = styled.div``;

export const Container = styled.div`
  ${helpers.flexSet('row', 'flex-start')};
  margin-top: 30px;
`;

export const List = styled.div`
  width: 100px;

  ${media.md`
    width: 160px;
    min-width: 280px;
  `}

  ${media.lg`
    min-width: 500px;
  `}
`;

export const Detail = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  ${media.md`
    padding-left: 30px;
    padding-right: 30px;
  `}
`;

export const EmptyContainer = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const Logo = styled.div`
  margin-top: 100px;
`;

export const Empty = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize, fontWeight: theme.typography.h5.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-top: 20px;
  `,
);
