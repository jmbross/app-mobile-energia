import React from 'react';
import SidebarItemView from './index.view';
import { SidebarItemProps } from './index.types';

const SidebarItemContainer = ({ link, selected, title, img, selectedImg }: SidebarItemProps) => {
  return <SidebarItemView link={link} selected={selected} title={title} img={img} selectedImg={selectedImg} />;
};

export default SidebarItemContainer;
