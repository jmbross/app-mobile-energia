import React from 'react';
import { ISectionProps } from './index.types';
import { Wrapper, Header, HeaderContainer, Body, More, Title, Subtitle, Description } from './index.styles';

const Section = ({
  children,
  title,
  subTitle,
  description,
  more,
  modal,
  titleAlign,
  descriptionAlign,
  marginTop,
  marginBottom,
  transparent,
  shadow = true,
}: ISectionProps) => {
  return (
    <Wrapper transparent={transparent} shadow={shadow} marginTop={marginTop} marginBottom={marginBottom}>
      {(title || subTitle || more || description) && (
        <Header>
          <HeaderContainer modal={modal} titleAlign={titleAlign}>
            {title && <Title>{title}</Title>}
            {subTitle && <Subtitle>{subTitle}</Subtitle>}
            {more && <More>{more}</More>}
          </HeaderContainer>
          {description && <Description descriptionAlign={descriptionAlign}>{description}</Description>}
        </Header>
      )}
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Section;
