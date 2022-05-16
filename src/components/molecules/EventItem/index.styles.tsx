import styled, { css, DefaultTheme } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleValue } from './index.types';

const reducedColor = (theme: DefaultTheme, reduced?: boolean) => {
  if (reduced === undefined) {
    return theme.colors.text[75];
  }

  return reduced ? theme.colors.palette.highest : theme.colors.primary[75];
};

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const Container = styled.div``;

export const Header = styled.div`
  ${helpers.flexSet('row', 'space-between', 'flex-end')};
`;

export const Body = styled(Header)`
  margin-top: 10px;
`;

export const Name = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })}
  `,
);

export const Percent = styled.p<IStyleValue>(
  ({ theme, reduced }) => css`
    color: ${reducedColor(theme, reduced)};
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize })}
  `,
);

export const Date = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize })}
    ${helpers.colorSet({ color: theme.colors.text[100] })}
  `,
);

export const Usage = styled.p<IStyleValue>(
  ({ theme, reduced }) => css`
    color: ${reducedColor(theme, reduced)};
    ${helpers.textSet({ fontSize: theme.typography.title.fontSize })}
  `,
);
