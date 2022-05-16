import React from 'react';
import { images, theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import IconButton from '@/atoms/IconButton';
import Img from '@/atoms/Img';
import { IEnrollmentTemplateViewProps } from './index.types';
import {
  Wrapper,
  Container,
  Header,
  Body,
  NavigationPath,
  Left,
  Title,
  Logo,
  Footer,
  ButtonsContainer,
} from './index.styles';

const EnrollmentTemplateView = ({
  children,
  appLogin,
  disabled,
  navigationIcon,
  navigationTitle,
  navigationPath,
  onBack,
  onNext,
  textNext,
  underline,
  onOther,
  textOther,
  showBoxShadow,
  wrapperMargin,
  wrapperMaxWidth,
  buttonsContainerPadding,
}: IEnrollmentTemplateViewProps) => {
  return (
    <Wrapper maxWidth={wrapperMaxWidth} margin={wrapperMargin}>
      <Container appLogin={appLogin} showBoxShadow={showBoxShadow}>
        <Header>
          <Left>
            <IconButton icon={images.arrowBackBlack.image} onClick={onBack} />
          </Left>
          {navigationIcon && (
            <Logo>
              <Img src={navigationIcon} />
            </Logo>
          )}
          {navigationTitle && <Title>{navigationTitle}</Title>}
        </Header>
        <Body>
          {navigationPath && <NavigationPath underline={underline}>{navigationPath}</NavigationPath>}
          {children}
          <Footer>
            <ButtonsContainer padding={buttonsContainerPadding}>
              {textNext && onNext && (
                <Button
                  label={textNext}
                  fontSize={theme.typography.button.fontSize}
                  backgroundColor={disabled ? theme.colors.primary[25] : theme.colors.primary[100]}
                  borderRadius={100}
                  borderColor={disabled ? theme.colors.primary[25] : theme.colors.primary[100]}
                  disabled={disabled}
                  color={theme.colors.text[0]}
                  width="100%"
                  height={46}
                  onClick={onNext}
                />
              )}
              {textOther && onOther && (
                <Button
                  label={textOther}
                  fontSize={theme.typography.button.fontSize}
                  color={theme.colors.primary[100]}
                  transparent
                  width="100%"
                  height={33}
                  marginTop={20}
                  onClick={onOther}
                />
              )}
            </ButtonsContainer>
          </Footer>
        </Body>
      </Container>
    </Wrapper>
  );
};

export default EnrollmentTemplateView;
