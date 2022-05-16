import React from 'react';
import { Link } from 'react-router-dom';
import Img from '@/atoms/Img';
import { Wrapper, Container, Logo, Title } from './index.styles';
import { SidebarItemViewProps } from './index.types';

const SidebarItemView = ({ link, selected, title, img, selectedImg }: SidebarItemViewProps) => {
  return (
    <Wrapper>
      <Link to={link}>
        <Container>
          <Logo selected={selected}>
            <Img src={selected ? selectedImg : img} />
          </Logo>
          <Title>{title}</Title>
        </Container>
      </Link>
    </Wrapper>
  );
};

export default SidebarItemView;
