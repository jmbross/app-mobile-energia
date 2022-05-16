import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div(
  ({ theme }) => css`
    flex: 1;
    min-height: 350px;

    ${helpers.flexSet('column', 'center', 'center')};
    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor })};
    ${helpers.borderSet({ borderRadius: theme.borders.default.radius })};
    box-shadow: ${theme.shadow.web.boxShadow};

    margin-top: 30px;
  `,
);

export const Container = styled.div`
  flex: 1;

  ${helpers.flexSet('column', 'center', 'center')};
  padding: 20px;
`;

export const Logo = styled.div`
  height: 80px;

  & > img {
    height: 100%;
  }
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.font.weight.bold,
      align: 'center',
    })};
    ${helpers.colorSet({ color: theme.colors.primary[100] })};

    margin-top: 20px;
    margin-bottom: 40px;
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.primary[100] })};
  `,
);
