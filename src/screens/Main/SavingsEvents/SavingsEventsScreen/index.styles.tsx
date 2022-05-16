import styled, { css } from 'styled-components';
import { media } from '@/assets/styles';
import { IStyleGridItem } from './index.types';

export const Grid = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template-areas:
    'gl'
    'gr';

  ${media.xxl`
    gap: 20px;
    grid-template-columns: 1fr 1.5fr;
    grid-template-areas: 'gl gr';
  `}
`;
export const GridItem = styled.div<IStyleGridItem>(
  ({ area }) => css`
    grid-area: ${area};
  `,
);
export const GridLeft = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas:
    'la'
    'lb'
    'lc';
`;

export const GridRight = styled.div`
  display: grid;
  gap: 20px;
  grid-template-areas:
    'ra'
    'rb'
    'rc';

  ${media.xl`
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
      'ra ra'
      'rb rc';
  `}
`;
