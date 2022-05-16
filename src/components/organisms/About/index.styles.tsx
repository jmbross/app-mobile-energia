import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div``;

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'flex-start')};

  padding: 30px;
`;

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};
  `,
);

export const Env = styled.p`
  margin-top: 30px;
  white-space: pre;
`;

export const CopyrightContainer = styled.div`
  ${helpers.marginSet({ marginTop: '5%' })};
`;

export const Copyright = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h3.fontSize,
      align: 'center',
    })};
  `,
);
