import styled from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  flex: 1;
  ${helpers.flexSet('column', 'space-between')};
`;

export const Container = styled.div`
  flex: 1;
`;
