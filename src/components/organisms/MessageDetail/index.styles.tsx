import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Header = styled.div``;

export const Body = styled.div`
  flex: 1;
  padding: 20px 0;
`;

export const Footer = styled.div``;

export const Title = styled(global.Title)`
  margin-bottom: 20px;
`;

export const Description = styled(global.Description)(
  ({ theme }) => css`
    color: ${theme.colors.text[100]};
  `,
);

export const Date = styled(global.Date)(
  ({ theme }) => css`
    color: ${theme.colors.text[100]};
  `,
);

export const Regards = styled(Description)``;
export const CreatedBy = styled(Description)``;

export const EmptyContainer = styled.div`
  ${helpers.flexSet('column', 'center', 'center')};
`;

export const Logo = styled.div`
  margin-top: 100px;
`;

export const Empty = styled.p(
  ({ theme }) => css`
    ${helpers.textSet({ fontSize: theme.typography.h5.fontSize, fontWeight: theme.typography.h5.fontWeight })};
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    margin-top: 20px;
  `,
);
