import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 30px;
`;

export const Sites = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};

  margin-bottom: 40px;
  overflow: auto;
`;

export const Address = styled(global.H3)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    margin-bottom: 57px;
  `,
);

export const Buttons = styled.div`
  ${helpers.flexSet('column', 'center', 'flex-start')};
`;

export const EmptyContainer = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
  padding: 20px;
`;

export const Empty = styled(global.H5)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-top: 20px;
  `,
);
