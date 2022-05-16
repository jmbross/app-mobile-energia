import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleButtonProps, IStyleTextProps } from './index.types';

export const Button = styled.button<IStyleButtonProps>(
  ({
    width,
    height,
    maxWidth,
    minWidth,
    backgroundColor,
    transparent,
    borderRadius,
    borderColor,
    borderWidth,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }) => css`
    ${helpers.colorSet({ backgroundColor, transparent })};
    ${helpers.sizeSet({ width, height, maxWidth, minWidth })};
    ${helpers.marginSet({ marginTop, marginRight, marginBottom, marginLeft })};
    ${helpers.paddingSet({ paddingTop, paddingRight, paddingBottom, paddingLeft })};
    ${helpers.borderSet({ borderWidth, borderRadius, borderColor })};
    cursor: pointer;
  `,
);

export const Container = styled.div`
  ${helpers.flexSet('row', 'space-between;', 'center')};
  flex: 1;
`;

export const Text = styled.span<IStyleTextProps>(
  ({ align, color, fontSize, labelWeight = 400 }) => css`
    flex: 1;
    font-weight: ${labelWeight};
    ${helpers.textSet({ fontSize, align })}
    ${helpers.colorSet({ color })}
  `,
);

export const Left = styled.div`
  margin-right: 10px;
`;

export const Right = styled.div`
  margin-left: 10px;
`;
