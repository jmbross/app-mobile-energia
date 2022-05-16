import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleWrapperProps } from './index.types';

export const Wrapper = styled.div<IStyleWrapperProps>(
  ({ flexDirection, justifyContent, alignItems }) => css`
    ${helpers.flexSet(flexDirection, justifyContent, alignItems)};
  `,
);
