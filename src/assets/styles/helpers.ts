import { css } from 'styled-components';

const calcRem = (pxSize: number) => `${pxSize / 16}rem`;

// eslint-disable-next-line default-param-last
const flexSet = (direction = 'row', just = 'center', align?: string) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${just};
  ${align && `align-items: ${align}`}
`;

interface TextSetProps {
  fontFamily?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  lineHeight?: number;
  letterSpacing?: number;
  align?: 'left' | 'center' | 'right';
}

export const textSet = ({ fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, align }: TextSetProps) => css`
  ${fontFamily && `font-family: ${fontFamily}`}
  ${fontSize && `font-size: ${typeof fontSize === 'string' ? fontSize : `${fontSize}px`}`};
  ${fontWeight && `line-height: ${lineHeight}`};
  ${letterSpacing && `letter-spacing: ${letterSpacing}`};
  ${align && `text-align: ${align}`};
`;

interface ColorSetProps {
  color?: string;
  backgroundColor?: string;
  transparent?: boolean;
}
export const colorSet = ({ color, backgroundColor, transparent }: ColorSetProps) => css`
  ${color && `color: ${color}`};
  ${(backgroundColor || transparent) && `background: ${transparent ? 'transparent' : backgroundColor}`};
`;

interface SizeSetProps {
  width?: number | string;
  height?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
}
const sizeSet = ({ width, height, maxWidth, minWidth }: SizeSetProps) => css`
  ${width && `width: ${typeof width === 'string' ? width : `${width}px`}`};
  ${height && `height: ${typeof height === 'string' ? height : `${height}px`}`};
  ${maxWidth && `max-width: ${typeof maxWidth === 'string' ? maxWidth : `${maxWidth}px`}`};
  ${minWidth && `min-width: ${typeof minWidth === 'string' ? minWidth : `${minWidth}px`}`};
`;

interface MarginSetProps {
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
}
const marginSet = ({ marginTop, marginRight, marginBottom, marginLeft }: MarginSetProps) => css`
  ${marginLeft && `margin-left: ${typeof marginLeft === 'string' ? marginLeft : `${marginLeft}px`}`};
  ${marginRight && `margin-right: ${typeof marginRight === 'string' ? marginRight : `${marginRight}px`}`};
  ${marginTop && `margin-top: ${typeof marginTop === 'string' ? marginTop : `${marginTop}px`}`};
  ${marginBottom && `margin-bottom: ${typeof marginBottom === 'string' ? marginBottom : `${marginBottom}px`}`};
`;

interface PaddingSetProps {
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
}
const paddingSet = ({ paddingTop, paddingRight, paddingBottom, paddingLeft }: PaddingSetProps) => css`
  ${paddingLeft && `padding-left: ${typeof paddingLeft === 'string' ? paddingLeft : `${paddingLeft}px`}`};
  ${paddingRight && `padding-right: ${typeof paddingRight === 'string' ? paddingRight : `${paddingRight}px`}`};
  ${paddingTop && `padding-top: ${typeof paddingTop === 'string' ? paddingTop : `${paddingTop}px`}`};
  ${paddingBottom && `padding-bottom: ${typeof paddingBottom === 'string' ? paddingBottom : `${paddingBottom}px`}`};
`;

interface BorderSetProps {
  borderDirection?: 'top' | 'bottom' | 'left';
  borderStyle?: string;
  borderColor?: string;
  borderWidth?: number | 'none';
  borderRadius?: number;
}
const borderSet = ({
  borderDirection,
  borderStyle = 'solid',
  borderWidth,
  borderColor,
  borderRadius,
}: BorderSetProps) => {
  if (borderWidth === 0 || borderWidth === 'none' || borderWidth === undefined) {
    return css`
      ${borderRadius && `border-radius: ${typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`}`};
      border: none;
    `;
  }

  if (borderDirection === 'top') {
    return css`
      ${borderStyle && `border-top-style: ${borderStyle}`};
      ${borderColor && `border-top-color: ${borderColor}`};
      ${borderWidth && `border-top-width: ${typeof borderWidth === 'string' ? borderWidth : `${borderWidth}px`}`};
    `;
  }

  if (borderDirection === 'left') {
    return css`
      ${borderStyle && `border-left-style: ${borderStyle}`};
      ${borderColor && `border-left-color: ${borderColor}`};
      ${borderWidth && `border-left-width: ${typeof borderWidth === 'string' ? borderWidth : `${borderWidth}px`}`};
    `;
  }

  if (borderDirection === 'bottom') {
    return css`
      ${borderStyle && `border-bottom-style: ${borderStyle}`};
      ${borderColor && `border-bottom-color: ${borderColor}`};
      ${borderWidth && `border-bottom-width: ${typeof borderWidth === 'string' ? borderWidth : `${borderWidth}px`}`};
    `;
  }

  return css`
    ${borderStyle && `border-style: ${borderStyle}`};
    ${borderColor && `border-color: ${borderColor}`};
    ${borderWidth && `border-width: ${typeof borderWidth === 'string' ? borderWidth : `${borderWidth}px`}`};
    ${borderRadius && `border-radius: ${typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`}`};
  `;
};

export { calcRem, flexSet, sizeSet, marginSet, paddingSet, borderSet };
