import React from 'react';
import Img from '@/atoms/Img';
import { UnitHelper } from '@/helpers/UnitHelper';
import { IUsageProps } from './index.types';
import { Wrapper, Container, Title, ValueContainer, Icon, Value, Description } from './index.styles';

const Usage = ({
  title,
  value,
  unit,
  description,
  arrow,
  valueIcon,
  valueColor,
  valueStrong,
  descriptionColor,
  valueSize,
  valuePadding,
}: IUsageProps) => {
  const renderUnit = () => {
    if (typeof value === 'string') {
      return value;
    }

    return `${UnitHelper.renderUnitValue(value || 0, unit, false, 2)}${arrow || ''}`;
  };

  return (
    <Wrapper>
      <Container>
        {title && <Title>{title}</Title>}
        <Value color={valueColor} strong={valueStrong} size={valueSize} padding={valuePadding}>
          {renderUnit()}
        </Value>
        {description !== undefined && (
          <ValueContainer>
            {valueIcon && (
              <Icon>
                <Img src={valueIcon} />
              </Icon>
            )}
            <Description color={descriptionColor}>{description || ''}</Description>
          </ValueContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default Usage;
