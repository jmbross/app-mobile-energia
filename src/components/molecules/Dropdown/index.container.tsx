import React, { useEffect, useState } from 'react';
import Img from '@/atoms/Img';
import { images } from '@/assets/styles';
import DropboxItem from '@/molecules/Dropdown/modules/DropboxItem';
import { Wrapper, Container, Input, ItemWrapper, ItemContainer } from './index.styles';
import { IDropdownProps } from './index.types';

const DropdownContainer = ({
  isMultiple,
  check,
  placeholder,
  items,
  values,
  borderRadius,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  onChange,
}: IDropdownProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;

      if (isOpen && !ref?.current?.contains(target as HTMLElement)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClick, false);

    return () => {
      window.removeEventListener('click', handleClick, false);
    };
  }, [isOpen]);

  const handleChange = (value: string | number, text: string) => {
    if (!check) {
      setIsOpen(false);
    }

    if (isMultiple) {
      if (values.includes(value)) {
        onChange(
          values.filter((item) => item !== value),
          text,
        );
      } else {
        onChange([...values, value], text);
      }
    } else {
      onChange([value], text);
    }
  };

  const retText = () => {
    const ret = items.filter((item) => {
      return values.find((value) => value === item.name) === item.name;
    });

    const { length } = ret;
    if (length === 0) {
      return placeholder;
    }

    if (isMultiple && length > 1) {
      return `${ret[0].text} 외 ${length - 1}개`;
    }

    return ret[0].text;
  };

  return (
    <Wrapper ref={ref}>
      <Container
        borderRadius={borderRadius}
        marginTop={marginTop}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginBottom={marginBottom}
        paddingLeft={paddingLeft}
        paddingRight={paddingRight}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Input type="text" placeholder={placeholder} value={retText()} readOnly opend={isOpen} />
        <Img src={isOpen ? images.dropdownUp : images.dropdownDown} />
      </Container>
      {isOpen && items.length > 0 && (
        <ItemWrapper>
          <ItemContainer>
            <DropboxItem items={items} values={values} onChange={handleChange} />
          </ItemContainer>
        </ItemWrapper>
      )}
    </Wrapper>
  );
};

export default DropdownContainer;
