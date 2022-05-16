import styled from 'styled-components';
import { helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  padding: 30px;
`;

export const Buttons = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};

  margin-top: 100px;
`;
