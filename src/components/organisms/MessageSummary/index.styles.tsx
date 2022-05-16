import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';
import { IStyleSelected, IStyleTitle } from './index.types';

export const Wrapper = styled.div<IStyleSelected>(
  ({ theme, selected }) => css`
    width: 100%;

    ${helpers.colorSet({ backgroundColor: theme.shadow.web.backgroundColor })};
    ${helpers.borderSet({ borderRadius: theme.borders.default.radius })};
    ${helpers.colorSet({ backgroundColor: selected ? theme.colors.primary[75] : theme.colors.primary[0] })};
    box-shadow: ${theme.shadow.web.boxShadow};

    padding: 20px 30px;
  `,
);

export const Header = styled.div`
  ${helpers.flexSet('row', 'space-between', 'center')};
  margin-bottom: 10px;
`;

export const Body = styled.div`
  ${helpers.flexSet('row', 'flex-end', 'center')};
`;

export const Title = styled(global.Title)<IStyleTitle>(
  ({ theme, selected, newMessage }) => css`
    ${helpers.textSet({
      fontSize: theme.typography.title.fontSize,
      fontWeight: newMessage ? theme.font.weight.bold : theme.font.weight.regular,
      align: 'left',
    })};

    ${selected && helpers.colorSet({ color: theme.colors.text[0] })};
  `,
);

export const New = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize, fontWeight: theme.font.weight.bold })};
    ${helpers.colorSet({ color: theme.colors.primary[100] })};
  `,
);

export const Date = styled(global.Date)<IStyleSelected>(
  ({ theme, selected }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize })};
    ${helpers.colorSet({ color: theme.colors.text[80] })};
    ${selected && helpers.colorSet({ color: theme.colors.text[0] })};

    margin-left: 20px;
  `,
);
