import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleItemProps } from './index.types';

export const Container = styled.div`
  flex: 1;

  ${helpers.flexSet('row', 'space-between', 'flex-end')};
`;

export const Item = styled.div<IStyleItemProps>(
  ({ theme, underline }) => css`
    flex: 1;
    width: 100%;

    ${helpers.flexSet('column', 'center', 'center')};
    ${underline &&
    helpers.borderSet({
      borderDirection: 'bottom',
      borderWidth: theme.borders.default.width,
      borderColor: theme.colors.border,
    })};
  `,
);
