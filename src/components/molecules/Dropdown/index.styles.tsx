import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleContainerProps, IStyleInputProps } from './index.types';

export const Wrapper = styled.div``;

export const Container = styled.div<IStyleContainerProps>(
  ({
    theme,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }) => css`
    ${helpers.flexSet('row', 'space-between', 'center')};
    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor })}
    ${helpers.marginSet({ marginTop, marginRight, marginBottom, marginLeft })}
    ${helpers.paddingSet({ paddingTop, paddingRight, paddingBottom, paddingLeft })}
    ${helpers.borderSet({ borderRadius: theme.borders.default.radius })};
    box-shadow: ${theme.shadow.web.boxShadow};
  `,
);

export const Input = styled.input<IStyleInputProps>(
  ({ theme }) => css`
    flex: 1;
    padding: 9px 12px;

    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })}
    ${helpers.colorSet({ color: theme.colors.text[100] })}
    ${helpers.borderSet({ borderWidth: 0 })};

    &:focus {
      outline: none;
    }
    cursor: pointer;
  `,
);
export const ItemWrapper = styled.div`
  position: relative;
`;

export const ItemContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;

    z-index: 2;

    background: ${theme.shadow.web.backgroundColor};
    box-shadow: ${({ theme }) => theme.shadow.web.boxShadow};

    max-height: 300px;
    overflow: auto;
  `,
);
