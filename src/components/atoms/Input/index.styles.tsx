import styled, { css, DefaultTheme } from 'styled-components';
import { helpers } from '@/assets/styles';
import { IStyleWrapperProps, IStyleInputProps } from './index.types';

const getBorder = (theme: DefaultTheme, style?: string) => {
  switch (style) {
    case 'border':
      return helpers.borderSet({
        borderRadius: theme.borders.default.radius,
        borderWidth: theme.borders.default.width,
        borderColor: theme.colors.border,
      });

    case 'underline':
      return helpers.borderSet({
        borderDirection: 'bottom',
        borderWidth: theme.borders.default.width,
        borderColor: theme.colors.border,
      });

    default:
      return helpers.borderSet({ borderWidth: 0 });
  }
};

export const Wrapper = styled.div<IStyleWrapperProps>(
  ({
    theme,
    border,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }) => css`
    ${helpers.flexSet('row', 'space-between', 'center')};
    ${helpers.marginSet({ marginTop, marginRight, marginBottom, marginLeft })}
    ${helpers.paddingSet({ paddingTop, paddingRight, paddingBottom, paddingLeft })}
    ${getBorder(theme, border)};
  `,
);

export const Input = styled.input<IStyleInputProps>(
  ({ theme, fontSize }) => css`
    flex: 1;

    ${helpers.textSet({ fontSize })}
    ${helpers.colorSet({ color: theme.colors.text[100], backgroundColor: 'transparent' })}
    ${helpers.borderSet({ borderWidth: 0 })};

    &:focus {
      outline: none;
    }

    &:valid {
      color: ${theme.colors.text[100]};
      font-weight: ${theme.font.weight.regular};
    }

    &::placeholder {
      color: ${theme.colors.text[75]};
    }
  `,
);

export const Left = styled.div`
  margin-right: 10px;
`;

export const Right = styled.div`
  margin-left: 10px;
`;
