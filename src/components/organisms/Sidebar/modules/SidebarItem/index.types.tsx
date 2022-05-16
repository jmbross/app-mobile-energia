import { DefaultImage } from '@/types/images';

export interface SidebarItemViewProps {
  link: string;
  selected: boolean;
  title: string;
  img: DefaultImage;
  selectedImg: DefaultImage;
}

export type SidebarItemProps = SidebarItemViewProps;
