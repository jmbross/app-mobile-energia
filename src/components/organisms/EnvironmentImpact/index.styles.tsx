import styled, { css } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleItemProps } from './index.types';

export const Container = styled.div`
  position: relative;
`;

export const ImpactGroup = styled.div``;

export const Help = styled.div`
  position: absolute;
  right: -10px;
  bottom: -10px;
`;

export const Item = styled.div<IStyleItemProps>(
  ({ theme, underline }) => css`
    flex: 1;
    padding: 25px 15px;

    ${helpers.flexSet('column', 'center')}
    ${underline &&
    helpers.borderSet({
      borderDirection: 'bottom',
      borderWidth: theme.borders.default.width,
      borderColor: theme.colors.border,
    })};
  `,
);

export const Header = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};

  margin-bottom: 20px;
`;

export const Body = styled.div``;

export const Logo = styled.div`
  height: 30px;

  & > img {
    height: 100%;
  }
`;

export const Title = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.body.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
    margin-left: 8px;
  `,
);

export const UsageGroup = styled.div`
  ${helpers.flexSet('row', 'space-between', 'center')};
`;
