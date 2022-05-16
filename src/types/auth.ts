export enum GBCStatus {
  none = 'NONE',
  notStarted = 'NOT_STARTED',
  incomplete = 'INCOMPLETE',
  inProgress = 'IN_PROGRESS',
  stillInProgress = 'STILL_IN_PROGRESS',
  completed = 'COMPLETED',
}

export interface UserInfo {
  id: string;
  isAuthenticated: boolean;

  /**
   * Olivine API AccessToken
   */
  oidcAccessToken: string;

  /**
   * Olivine API LogoutToken
   */
  oidcIdToken: string;

  gbcStatus: GBCStatus;
  email: string;
  firstName: string;
  lastName: string;
  isLocationBusiness: boolean;
  zipcode: string;
  phoneNumber?: string;
  siteName: string;
  language: string;
}
