import styled from 'styled-components';
import OriginButton from '@/atoms/Button';
import { IStyleButtonProps } from './index.types';

export const Button = styled(OriginButton)<IStyleButtonProps>`
  border: none;
  outline: none;
`;
