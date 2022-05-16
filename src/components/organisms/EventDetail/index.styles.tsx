import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Header = styled.div``;

export const Body = styled.div`
  flex: 1;
  position: relative;
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
      align: 'center',
    })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);

export const DateTime = styled.div`
  margin: 10px 0;
  ${helpers.flexSet('row', 'flex-start', 'center')};
`;

export const DateTimeContainer = styled.div`
  ${helpers.flexSet('row', 'space-between', 'center')};
  margin: 20px 0;
`;

export const Icon = styled.div`
  img {
    height: 100%;
  }
`;

export const Date = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
    margin-left: 10px;
  `,
);

export const Time = styled(Date)``;

export const TabsWrapper = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const NoDataContainer = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
  height: 750px;
`;

export const NoData = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, fontWeight: theme.typography.title.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
  `,
);

export const Help = styled.div`
  position: absolute;
  right: 10px;
  bottom: 25px;
`;
