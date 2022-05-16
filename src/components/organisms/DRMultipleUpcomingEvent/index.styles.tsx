import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';

import { Wrapper as OriginWrapper, Date as OriginDate } from '@/organisms/DRNoEvent/index.styles';
import { IStyleWrapper } from './index.types';

export const Wrapper = styled(OriginWrapper)<IStyleWrapper>(
  ({ index }) => css`
    ${index > 0 && helpers.marginSet({ marginTop: 20 })};
  `,
);

export const Container = styled.div`
  ${helpers.flexSet('column', 'center')};
  position: relative;
`;

export const Logo = styled.div`
  width: 30px;
  height: 30px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-left: 10px;
  `,
);

export const Upcoming = styled.div`
  margin-top: 10px;
`;

export const Date = styled(OriginDate)``;

export const Time = styled(Date)``;

export const Header = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};
`;

export const Body = styled.div`
  margin-top: 20px;
`;

export const Footer = styled.div`
  margin-top: 20px;
`;

export const More = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
