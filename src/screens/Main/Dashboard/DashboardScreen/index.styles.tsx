import styled from 'styled-components';
import { media } from '@/assets/styles';

export const Grid = styled.div`
  margin-top: 20px;

  display: block;

  ${media.xl`
    display: grid;
    grid-template-areas:
      'gl'
      'gr';
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
  `}
`;
export const GridItem = styled.div`
  padding: 15px 0;
`;

export const FirstColumn = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
`;

export const SecondColumn = styled.div`
  grid-column: 3 / 3;
  grid-row: 1;
`;
