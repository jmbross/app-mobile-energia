import styled from 'styled-components';
import { helpers, media } from '@/assets/styles';

export const Wrapper = styled.div``;

export const Header = styled.div`
  ${helpers.flexSet('column-reverse', 'space-between', 'center')};

  ${media.md`
    ${helpers.flexSet('row', 'space-between', 'center')};
    margin-top: 30px;
  `}
`;

export const Container = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const LegendContainer = styled.div`
  ${helpers.flexSet('row', 'space-between', 'center')};
`;

export const TimeList = styled.div`
  ${helpers.flexSet('row', 'space-between', 'center')};

  margin-top: 20px;

  ${media.md`
    margin-top: initial;
  `}
`;

export const RightIcon = styled.div`
  transform: rotate(-180deg);
  padding: 0 10px;
`;

export const GraphContainer = styled.div`
  // // ${helpers.flexSet('column', 'center', 'center')};
  // width: 1500px;
  // overflow: scroll;
`;
