import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';
import { IStyleDescription, IStyleHeaderContainer, IStyleWrapper } from './index.types';

export const Wrapper = styled.div<IStyleWrapper>(
  ({ theme, transparent, shadow, marginTop, marginBottom }) => css`
    flex: 1;

    padding: 30px;

    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor, transparent })};
    ${helpers.marginSet({ marginTop, marginBottom })};
    ${helpers.borderSet({ borderRadius: theme.borders.default.radius })};
    ${shadow &&
    css`
      box-shadow: ${theme.shadow.web.boxShadow};
    `};
  `,
);

export const Header = styled.div`
  margin-bottom: 16px;

  position: relative;
`;

export const HeaderContainer = styled.div<IStyleHeaderContainer>(
  ({ titleAlign }) => css`
    ${helpers.flexSet('row', titleAlign || 'flex-start')};
  `,
);

export const More = styled.div`
  position: absolute;
  right: 0;
`;

export const Body = styled.div``;

export const Title = styled(global.H3)``;

export const Subtitle = styled(global.Subtitle)`
  margin-left: 8px;
`;

export const Description = styled(global.Description)<IStyleDescription>(
  ({ descriptionAlign }) => css`
    margin-top: 8px;
    text-align: ${descriptionAlign || 'left'};
  `,
);
