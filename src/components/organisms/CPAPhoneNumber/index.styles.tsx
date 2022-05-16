import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { Description as OriginDescription } from '@/organisms/StartRegister/index.styles';

export const News = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};
`;

export const NewsText = styled.p(
  ({ theme }) => css`
    flex: 1;

    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, fontWeight: theme.typography.title.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.primary[75] })};

    margin-left: 10px;
  `,
);

export const Description = styled(OriginDescription)``;
