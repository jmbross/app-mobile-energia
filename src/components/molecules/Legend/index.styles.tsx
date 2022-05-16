import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';
import { IStyleDotProps, IStyleWrapperProps } from './index.types';

export const Wrapper = styled.div<IStyleWrapperProps>(
  ({ marginLeft }) => css`
    ${helpers.flexSet('row', 'flex-start', 'center')};
    ${helpers.marginSet({ marginLeft })};
  `,
);

export const Dot = styled.div<IStyleDotProps>(
  ({ theme, dotColor }) => css`
    width: 10px;
    height: 10px;
    ${helpers.colorSet({ backgroundColor: dotColor })};

    ${dotColor === '#fff' &&
    helpers.borderSet({
      borderRadius: theme.borders.default.radius,
      borderWidth: theme.borders.default.width,
      borderColor: theme.colors.border,
    })};
  `,
);

export const Title = styled(global.Subtitle)(
  ({ theme }) => css`
    margin-left: 4px;
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);
