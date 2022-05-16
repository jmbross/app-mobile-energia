import styled, { css } from 'styled-components';
import { media } from '@/assets/styles';

export const Overlay = styled.div``;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 40px 0 #69686a;
  background-color: transparent;
  position: relative;

  width: 100%;
  box-sizing: border-box;

  ${media.md`
    min-width: 400px;
    max-width: 550px;
  `}
`;

export const Header = styled.div`
  margin-bottom: 16px;

  padding: 30px 30px 0;
`;

export const Title = styled.p(
  ({ theme }) => css`
    font-size: ${theme.typography.h2.fontSize};
    font-weight: ${theme.typography.h2.fontWeight};
    color: ${theme.colors.primary[100]};
    text-align: center;
  `,
);

export const More = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const Body = styled.div`
  overflow-y: auto;

  max-height: 500px;
  padding: 0 20px 0 20px;

  ${media.md`
    max-height: 600px;
    padding: 0 100px 0 100px;
  `};
`;

export const Footer = styled.div`
  padding: 0 20px 30px 20px;

  ${media.md`
    padding: 0 100px 30px 100px;
  `};
`;
