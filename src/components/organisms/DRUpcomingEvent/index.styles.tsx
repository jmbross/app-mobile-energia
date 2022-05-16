import styled from 'styled-components';
import { helpers } from '@/assets/styles';

import {
  Wrapper as OriginWrapper,
  Container as OriginContainer,
  Logo as OriginLogo,
  Description as OriginDescription,
  Date as OriginDate,
} from '@/organisms/DRNoEvent/index.styles';

export const Wrapper = styled(OriginWrapper)``;

export const Container = styled(OriginContainer)``;

export const Logo = styled(OriginLogo)``;

export const Title = styled(OriginDescription)``;

export const Upcoming = styled.div`
  margin-top: 10px;
`;

export const Date = styled(OriginDate)``;

export const Time = styled(Date)``;

export const Header = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const Body = styled.div`
  margin-top: 20px;
`;

export const Footer = styled.div`
  margin-top: 20px;
  width: 100%;
`;
