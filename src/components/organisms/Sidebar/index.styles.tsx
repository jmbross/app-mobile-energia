import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    ${helpers.colorSet({ backgroundColor: theme.colors.primary[75] })};

    height: 100%;
  `,
);

export const Container = styled.div``;

export const Logo = styled.div`
  width: 180px;
  height: 100px;

  margin: 0 auto;
  padding: 40px 0;

  & > img {
    height: 100%;
  }
`;
