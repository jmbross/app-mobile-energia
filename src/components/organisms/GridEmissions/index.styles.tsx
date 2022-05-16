import styled, { css, keyframes } from 'styled-components';
import { helpers } from '@/assets/styles';

export const gaugeAnim = keyframes`
{ 
  from { 
    stroke-dasharray: 807.0476684570312px 403.5238342285156px; 
  } to { 
    stroke-dasharray: 597.2152746582032px 403.5238342285156px; 
  }}
`;

export const Container = styled.div`
  ${helpers.flexSet('column', 'center')};
`;

export const RowView = styled.div`
  max-width: 240px !important;
  margin-left: auto;
  margin-right: auto;
`;

export const TextLow = styled.span`
  float: left;
`;

export const TextHigh = styled.span`
  float: right;
`;

export const Title = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.title.fontSize};
    font-weight: ${theme.typography.title.fontWeight};
    color: ${theme.colors.text[80]};
  `,
);

export const TitleSub = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.title.fontSize};
    font-weight: ${theme.typography.title.fontWeight};
    color: ${theme.colors.text[100]};
    ${helpers.flexSet('row', 'center')};
  `,
);

export const TitleSub2 = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.description.fontSize};
    font-weight: ${theme.typography.description.fontWeight};
    color: ${theme.colors.text[80]};
    margin-top: 26px;
    ${helpers.flexSet('row', 'center')};
  `,
);

export const Description = styled.div(
  () => css`
    ${helpers.flexSet('row', 'center')};
  `,
);

export const PoweredBy = styled.div(
  ({ theme }) => css`
    font-size: ${theme.typography.title.fontSize};
    font-weight: ${theme.typography.title.fontWeight};
    color: ${theme.colors.text[80]};
    margin-top: 26px;
    ${helpers.flexSet('row', 'center')};
  `,
);

export const Number = styled.div(
  ({ theme }) => css`
    display: block;
    font-size: ${theme.typography.h1.fontSize};
    font-weight: ${theme.typography.h1.fontWeight};
    color: ${theme.colors.text[100]};
    margin: 0;
  `,
);
