import styled, { css } from 'styled-components';
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

export const Header = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};
`;

export const Body = styled.div``;

export const Logo = styled(OriginLogo)`
  width: 30px;
  height: 30px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled(OriginDescription)`
  margin-top: inherit;
  margin-left: 10px;
`;

export const Upcoming = styled.div`
  margin-top: 30px;
`;

export const Date = styled(OriginDate)``;

export const Time = styled(Date)``;

export const RemainingTime = styled.div``;

export const Timer = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: 36, fontWeight: theme.font.weight.bold, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.primary[75] })};
    margin-top: 25px;
  `,
);

export const TimerDescription = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontWeight: theme.typography.body.fontWeight, align: 'center' })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
  `,
);

export const More = styled.div(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-top: 44px;
    & > span {
      color: ${theme.colors.primary[75]};
    }
  `,
);
