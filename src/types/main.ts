export interface SiteItem {
  id: string;
  created?: Date;
  updated?: Date;
  name: string;
  userId: string;
  accountInfoObtained: boolean;
  serviceAccountNumber: string;
  addressStreet1: string;
  addressStreet2: string;
  city: string;
  state: string;
  zipcode: string;
  gbiIntegrationId: string;
  achievementLevel: string;
  program: string;
  gbiProgramEligible?: boolean;
}

export interface Sites {
  sitesConfirmed: boolean;
  agreedUponProgram: string;
  count: number;
  sites: SiteItem[];
}
