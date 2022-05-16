import styled, { css } from 'styled-components';
import { helpers, media } from '@/assets/styles';
import { IStyleLeft } from './index.types';

export const Wrapper = styled.div`
  ${helpers.flexSet('row', 'flex-start')};

  max-width: 1920px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Left = styled.div<IStyleLeft>(
  ({ hamburgerOpen }) => css`
    min-width: 300px;

    display: ${hamburgerOpen ? 'block' : 'none'};
    transition: 1s;

    ${media.lg`
      display: block;
    `};
  `,
);

export const Container = styled.div`
  flex: 1;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;

  ${media.xl`
    padding: 30px 30px 94px;
  `};
`;

export const Header = styled.div`
  ${helpers.flexSet('row', 'flex-end', 'center')};

  height: 80px;
  padding: 0 15px;

  ${media.xl`
    height: 80px;
    padding: 0 70px;
  `}
`;

export const Body = styled.div``;
