import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleWrapperProps } from './index.types';

export const Wrapper = styled.div<IStyleWrapperProps>(
  ({ theme, marginTop, shadow, transparent, align }) => css`
    ${helpers.flexSet('column', 'center', align)};
    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor, transparent })};
    ${helpers.marginSet({ marginTop })};
    ${helpers.borderSet({ borderRadius: theme.borders.default.radius })};
    ${shadow &&
    css`
      box-shadow: ${theme.shadow.web.boxShadow};
    `};
  `,
);
