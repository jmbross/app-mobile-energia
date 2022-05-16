import styled from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  max-width: 1920px;
  min-width: 320px;
  margin: 0 auto;
`;

export const Header = styled.div`
  ${helpers.flexSet('row', 'flex-end', 'center')};

  height: 80px;
  padding: 0 15px;
`;

export const Body = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};

  padding: 0 15px;
`;
