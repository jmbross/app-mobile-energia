import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleValue } from './index.types';

export const Wrapper = styled.div``;

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize, fontWeight: theme.typography.body.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
    margin-bottom: 10px;
  `,
);

export const ValueContainer = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};
`;

export const Icon = styled.div`
  margin-right: 8px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Value = styled.p<IStyleValue>(
  ({ theme, color, strong, size, padding }) => css`
    ${helpers.textSet({
      fontSize: size ?? theme.typography.h2.fontSize,
      fontWeight: strong ? theme.font.weight.bold : theme.font.weight.regular,
    })};
    ${helpers.colorSet({ color: color || 'black' })};

    padding: ${padding ?? '0px'};

    margin-top: 4px;
    margin-bottom: 4px;
  `,
);

export const Description = styled.p<IStyleValue>(
  ({ theme, color }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: color || theme.colors.text[100] })};
  `,
);
