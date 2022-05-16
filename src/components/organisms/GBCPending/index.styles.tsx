import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import {
  Wrapper as OriginWrapper,
  Title as OriginTitle,
  Description as OriginDescription,
  Container as OriginContainer,
} from '@/organisms/GBCInProgress/index.styles';

export const Wrapper = styled(OriginWrapper)``;

export const Container = styled(OriginContainer)``;

export const Title = styled(OriginTitle)``;

export const Description = styled(OriginDescription)``;

export const Share = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.body.fontSize,
      fontWeight: theme.font.weight.bold,
      align: 'center',
    })};
    ${helpers.colorSet({ color: theme.colors.primary[100] })};

    margin-top: 20px;
  `,
);

export const Buttons = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};

  margin-top: 16px;
`;

export const ShareButton = styled.div`
  padding: 0 10px;
`;

export const ShareTitle = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.body.fontSize,
      fontWeight: theme.font.weight.bold,
      align: 'center',
    })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};

    margin-top: 6px;
  `,
);
