import styled, { css } from 'styled-components';
import { global, helpers } from '@/assets/styles';

export const Wrapper = styled.div`
  height: 60px;
`;

export const Container = styled.div`
  ${helpers.flexSet('row', 'flex-start', 'center')};
  padding: 0 25px;
`;

export const Logo = styled.div(
  ({ selected }) => `
  width: 50px;
  height: 50px;
  border-radius: 50px;
  
  ${
    selected
      ? `
      background-color: white;
    `
      : ''
  }

  justify-content: center;
  align-items: center;
  display: flex;

  & > img {
    width: 40%;
    height: 40%;
  }
`,
);

export const Title = styled(global.H5)(
  ({ theme }) => css`
    ${helpers.colorSet({ color: theme.colors.text[0] })};
    margin-left: 10px;
  `,
);
