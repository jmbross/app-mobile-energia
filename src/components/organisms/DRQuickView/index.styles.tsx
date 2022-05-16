import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  ${helpers.flexSet('row', 'space-between', 'center')};
  padding: 0 50px;
  margin-top: 40px;
`;

export const Body = styled.div`
  flex: 1;
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, align: 'center' })};

    margin-top: 50px;
  `,
);

export const GraphContainer = styled.div`
  flex: 1;
`;

export const LegendContainer = styled.div`
  ${helpers.flexSet('column')};
  margin: 20px auto;
`;
