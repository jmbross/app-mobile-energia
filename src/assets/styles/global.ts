import styled, { css } from 'styled-components';
import * as helpers from './helpers';

export const H1 = styled.h1(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      lineHeight: theme.typography.h1.lineHeight,
      letterSpacing: theme.typography.h1.letterSpacing,
    })};
  `,
);

export const H2 = styled.h2(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h2.fontSize,
      fontWeight: theme.typography.h2.fontWeight,
      lineHeight: theme.typography.h2.lineHeight,
      letterSpacing: theme.typography.h2.letterSpacing,
    })};
  `,
);

export const H3 = styled.h3(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h3.fontSize,
      fontWeight: theme.typography.h3.fontWeight,
      lineHeight: theme.typography.h3.lineHeight,
      letterSpacing: theme.typography.h3.letterSpacing,
    })};
  `,
);

export const H4 = styled.h4(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
      lineHeight: theme.typography.h4.lineHeight,
      letterSpacing: theme.typography.h4.letterSpacing,
    })};
  `,
);

export const H5 = styled.h5(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.h5.fontWeight,
      lineHeight: theme.typography.h5.lineHeight,
      letterSpacing: theme.typography.h5.letterSpacing,
    })};
  `,
);

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.title.fontSize,
      fontWeight: theme.typography.title.fontWeight,
      lineHeight: theme.typography.title.lineHeight,
      letterSpacing: theme.typography.title.letterSpacing,
    })};
  `,
);

export const Subtitle = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.subtitle.fontSize,
      fontWeight: theme.typography.subtitle.fontWeight,
      lineHeight: theme.typography.subtitle.lineHeight,
      letterSpacing: theme.typography.subtitle.letterSpacing,
    })};
  `,
);

export const Date = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.date.fontSize,
      fontWeight: theme.typography.date.fontWeight,
      lineHeight: theme.typography.date.lineHeight,
      letterSpacing: theme.typography.date.letterSpacing,
    })};
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.description.fontSize,
      fontWeight: theme.typography.description.fontWeight,
      lineHeight: theme.typography.description.lineHeight,
      letterSpacing: theme.typography.description.letterSpacing,
    })};
  `,
);
export const Caption = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.caption.fontSize,
      fontWeight: theme.typography.caption.fontWeight,
      lineHeight: theme.typography.caption.lineHeight,
      letterSpacing: theme.typography.caption.letterSpacing,
    })};
  `,
);
