export type TabType = {
  id: string | number;
  title: string;
  tabName: string;
  link?: string;
};

export interface ITabsProps {
  fontSize?: number;
  tabs: TabType[];
  selected: string;
  onClick: (tabName: string, link?: string) => void;
}
