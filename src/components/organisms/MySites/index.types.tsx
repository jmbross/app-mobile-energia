import { SiteItem } from '@/types/main';

export interface IMySitesProps {
  sites: SiteItem[];
  siteId: string;
  siteName: string;
  siteAddress: string;
  siteProgram: string;
  disabledSave: boolean;
  onSiteClick: (siteId: string) => void;
  onProgramInfo: () => void;
  onChangeSiteName: (value: string) => void;
  onDelete: () => void;
  onSave: () => void;

  modalProgramInformation: boolean;
  modalProgramInformationClose: () => void;

  modalRemoveSite: boolean;
  modalRemoveSiteClose: () => void;
  modalRemoveSiteOk: () => void;
  modalRemoveSiteCancel: () => void;
}
