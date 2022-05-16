import { SiteItem } from '@/types/main';

export interface AppbarViewProps {
  sites: SiteItem[];
  currentSite: string;
  onChangeSite: (value: string) => void;
  onChangeHamburger: () => void;
}
