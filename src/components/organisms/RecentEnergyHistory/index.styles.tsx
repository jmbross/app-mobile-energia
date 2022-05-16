import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Container = styled.div`
  position: relative;
  height: 500px;
`;

export const Header = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
  overflow: auto;
`;

export const UsageGroup = styled.div(
  ({ theme }) => css`
    ${helpers.flexSet('row', 'space-between', 'center')};

    ${helpers.borderSet({
      borderDirection: 'top',
      borderWidth: theme.borders.default.width,
      borderColor: theme.colors.border,
    })};
    margin-top: 35px;
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 30px;
  `,
);

export const Body = styled.div``;

export const Footer = styled.div``;

export const Help = styled.div`
  position: absolute;
  right: -10px;
  bottom: -10px;
`;

export const NoDataContainer = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
  height: 100%;
`;

export const NoData = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, fontWeight: theme.typography.title.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
  `,
);
