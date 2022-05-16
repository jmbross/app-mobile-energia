import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  flex: 1;
  ${helpers.flexSet('row', 'center', 'center')};
`;

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'flex-start')};
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, fontWeight: theme.typography.title.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
  `,
);

export const Upcoming = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};

  margin-top: 10px;
`;

export const Date = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h2.fontSize, fontWeight: theme.typography.h2.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);

export const Time = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h2.fontSize, fontWeight: theme.typography.h2.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.primary[75] })};

    margin-left: 15px;
  `,
);
