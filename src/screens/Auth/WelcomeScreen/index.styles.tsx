import styled from 'styled-components';
import { media, helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  ${helpers.flexSet('column', 'flex-start', 'center')};

  ${media.lg`
    ${helpers.flexSet('row', 'space-between', 'flex-start')};
  `}
`;
