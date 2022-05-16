import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleMenuItem } from './index.types';

export const MenuItem = styled.div<IStyleMenuItem>(
  ({ theme, selected }) => css`
    ${helpers.colorSet({ backgroundColor: selected ? theme.colors.text[25] : theme.colors.text[0] })}
  `,
);

export const Text = styled.p(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[75] })}

    padding: 10px;

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.text[25]};
    }
  `,
);
