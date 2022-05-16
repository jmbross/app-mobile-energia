import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { images } from '@/assets/styles';
import IconButton from '@/atoms/IconButton';
import Dropdown from '@/molecules/Dropdown';
import { Wrapper, Container, Left, Right, Date, NoSite, Hamburger } from './index.styles';
import { AppbarViewProps } from './index.types';

const AppbarView = ({ currentSite, sites, onChangeSite, onChangeHamburger }: AppbarViewProps) => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Hamburger>
            <IconButton icon={images.hamburger.image} onClick={onChangeHamburger} />
          </Hamburger>
          {sites.length === 0 ? (
            <NoSite>Error : No Site</NoSite>
          ) : (
            <Dropdown
              items={sites.map(({ id, name }) => {
                return { name: id, text: name };
              })}
              values={[currentSite]}
              onChange={(name) => onChangeSite(name[0] as string)}
            />
          )}
        </Left>
        <Right>
          <Date>{moment().format('MMMM Do YYYY | dddd')}</Date>
        </Right>
      </Container>
    </Wrapper>
  );
};

export default AppbarView;
