import { Language, TempScale } from '@/types/setting';
import { GBCStatus } from '@/types/auth';

export interface ReqUpdateUserInfo {
  isAuthenticated?: boolean;
  email?: string;
  firstName?: string;
  lastName?: string;
  isLocationBusiness?: boolean;
  zipcode?: string;
  phoneNumber?: string;
  siteName?: string;
  gbcStatus?: GBCStatus;
  expoPushToken?: string;
}

export interface ReqSetting {
  language: Language;
  tempScale: TempScale;
}
