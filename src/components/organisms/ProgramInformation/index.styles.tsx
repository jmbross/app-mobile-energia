import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: 15px;
    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor })};
    ${helpers.borderSet({ borderRadius: theme.borders.default.radius })};
    box-shadow: ${theme.shadow.web.boxShadow};
  `,
);

export const Container = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};
  width: 100%;
`;

export const Logo = styled.div`
  width: 24px;
  height: 24px;

  img {
    height: 100%;
  }
`;

export const Program = styled.div(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })};
    ${helpers.colorSet({ color: theme.colors.primary[75] })};
    margin-left: 10px;
  `,
);

export const Arrow = styled.div`
  margin-left: auto;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;
