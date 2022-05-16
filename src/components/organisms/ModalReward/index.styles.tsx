import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Title = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.body.fontSize};
    font-weight: ${theme.typography.body.fontWeight};
    color: ${theme.colors.text[100]};
  `,
);

export const Reward = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const Wrapper = styled.div`
  margin-top: 80px;
`;

export const Logo = styled.div`
  width: 60px;
  height: 54px;
`;

export const Level = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.title.fontSize};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.text[100]};
  `,
);

export const Summary = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.title.fontSize};
    font-weight: ${theme.typography.title.fontWeight};
    color: ${theme.colors.primary[100]};
    margin-top: 31px;
    margin-bottom: 20px;
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.title.fontSize};
    color: ${theme.colors.primary[80]};
  `,
);
