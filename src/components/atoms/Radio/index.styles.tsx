import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { StyleWrapperProps, StyleTextProps } from './index.types';

export const Wrapper = styled.div<StyleWrapperProps>`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div``;

export const Radio = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};
  cursor: pointer;
  padding: 10px 0;
`;

export const Text = styled.span<StyleTextProps>(
  ({ theme, selected }) => css`
    flex: 1;
    flex-wrap: wrap;

    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })}
    ${helpers.colorSet({ color: selected ? theme.colors.text[100] : theme.colors.text[75] })}

    margin-left: 10px;
  `,
);
