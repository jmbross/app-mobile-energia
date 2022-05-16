import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleWrapperProps } from './index.types';

export const Wrapper = styled.div<IStyleWrapperProps>(
  ({ theme, selected }) => css`
    padding: 0px 15px;
    height: 40px;

    ${helpers.borderSet({
      borderDirection: 'bottom',
      borderWidth: selected ? 3 : theme.borders.default.width,
      borderColor: selected ? theme.colors.primary[75] : '#87a0b5',
    })};
  `,
);
