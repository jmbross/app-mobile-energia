import styled from 'styled-components';
import { media, helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  ${helpers.flexSet('column', 'flex-start', 'center')};

  width: 100%;

  ${media.xl`
    ${helpers.flexSet('row', 'space-between', 'flex-start')};
    width: 68%;
  `}
`;
