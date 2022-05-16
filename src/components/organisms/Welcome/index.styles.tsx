import styled, { css } from 'styled-components';
import { global, media, helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  margin-bottom: 100px;

  ${media.lg`
    max-width: 580px;
    margin-top: 100px;
    margin-right: 100px;
    padding: 0 20px;
  `}
`;

export const Title = styled(global.H1)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.primary[100] })};
    margin-top: 40px;
  `,
);

export const QRWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
`;

export const QRImage = styled.img`
  width: 159px;
`;

export const Description = styled(global.H2)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    margin-top: 40px;
  `,
);

export const MobileApp = styled(global.H2)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[100] })};

    margin-top: 100px;
    margin-bottom: 40px;
  `,
);

export const ButtonGroup = styled.div`
  ${helpers.flexSet('row', 'center', 'center')};

  ${media.lg`
    justify-content: flex-start;
  `}
`;
