import React from 'react';
import Tab from './modules/Tab';
import { Wrapper } from './index.styles';
import { ITabsProps } from './index.types';

const Tabs = ({ tabs, selected, fontSize = 16, onClick }: ITabsProps) => {
  return (
    <Wrapper>
      {tabs.map(({ id, title, tabName, link }) => (
        <Tab
          key={id}
          label={title}
          fontSize={fontSize}
          selected={tabName === selected}
          onClick={() => onClick(tabName, link)}
        />
      ))}
    </Wrapper>
  );
};

export default Tabs;
