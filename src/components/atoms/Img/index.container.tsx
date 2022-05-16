import React from 'react';
import { IImgProps } from './index.types';
import { Wrapper, Text } from './index.styles';

const ImgContainer = ({ src, style }: IImgProps) => {
  let imgSrc = '';
  let imgText = '';

  if (typeof src === 'string') {
    imgSrc = src;
    imgText = '';
  } else {
    const { image, text } = src;
    imgSrc = image;
    imgText = text || '';
  }

  const renderError = () => {
    return (
      <Wrapper>
        <Text>{imgText}</Text>
      </Wrapper>
    );
  };

  return <img src={imgSrc} alt={imgText} style={style} /> || renderError();
};

export default ImgContainer;
