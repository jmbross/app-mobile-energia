import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleL } from './index.types';

const setSize = (size: 'small' | 'medium' | 'large') => {
  if (size === 'small') {
    return { width: 28, height: 25 };
  }

  if (size === 'medium') {
    return { width: 60, height: 54 };
  }

  return { width: 90, height: 81 };
};

export const Wrapper = styled.div``;

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const Logo = styled.div<IStyleL>(
  ({ size }) => css`
    ${helpers.sizeSet(setSize(size))};

    & > img {
      width: 100%;
      height: 100%;
    }
  `,
);

export const Title = styled.p`
  margin-top: 10px;
`;

export const TitleContainer = styled.div`
  position: relative;
`;

export const Help = styled.div`
  position: absolute;
  right: -30px;
  bottom: -3px;
`;
