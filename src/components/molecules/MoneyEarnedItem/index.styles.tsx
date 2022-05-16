import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const Container = styled.div``;

export const Header = styled.div`
  ${helpers.flexSet('row', 'space-between', 'center')};
`;

export const Body = styled.div`
  ${helpers.flexSet('row', 'space-between', 'flex-start')};
  margin-top: 10px;
`;

export const Date = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.description.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);

export const Money = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize, fontWeight: theme.font.weight.bold })};
    ${helpers.colorSet({ color: theme.colors.primary[75] })};
  `,
);

export const Type = styled.div`
  // ${helpers.flexSet('row', 'flex-start', 'flex-start')};

  flex: 1;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Incentive = styled.p(
  ({ theme }) => css`
    flex: 1;

    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize, fontWeight: theme.font.weight.bold, align: 'left' })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);

export const Balance = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-left: 20px;
  `,
);
