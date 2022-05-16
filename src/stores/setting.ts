import { ReqSetting } from '@/apis/auth/types';
import { Language, OTPStatus } from '@/types/setting';
import { ReqPhoneOtpRequest, ReqPhoneOtpVerification } from '@/apis/enrollment/types';

// Types
//
// Update Setting
export const SETTING_REQUEST = 'setting/SETTING_REQUEST';
export const SETTING_SUCCESS = 'setting/SETTING_SUCCESS';
export const SETTING_FAILURE = 'setting/SETTING_FAILURE';

// Language
export const CHANGE_LANGUAGE = 'setting/CHANGE_LANGUAGE';

// Phone
export const CHANGE_PHONE_OTP_INTERVAL = 'setting/CHANGE_PHONE_OTP_INTERVAL';
export const CHANGE_PHONE_OTP = 'setting/CHANGE_PHONE_OTP';

export const PHONE_OTP_REQUEST = 'setting/PHONE_OTP_REQUEST';
export const PHONE_OTP_SUCCESS = 'setting/PHONE_OTP_SUCCESS';
export const PHONE_OTP_FAILURE = 'setting/PHONE_OTP_FAILURE';

export const PHONE_OTP_VERIFICATION_REQUEST = 'setting/PHONE_OTP_VERIFICATION_REQUEST';
export const PHONE_OTP_VERIFICATION_SUCCESS = 'setting/PHONE_OTP_VERIFICATION_SUCCESS';
export const PHONE_OTP_VERIFICATION_FAILURE = 'setting/PHONE_OTP_VERIFICATION_FAILURE';

export const PHONE_OTP_RESEND_REQUEST = 'setting/PHONE_OTP_RESEND_REQUEST';
export const PHONE_OTP_RESEND_SUCCESS = 'setting/PHONE_OTP_RESEND_SUCCESS';
export const PHONE_OTP_RESEND_FAILURE = 'setting/PHONE_OTP_RESEND_FAILURE';

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  language: Language;
}

interface SettingRequestAction {
  type: typeof SETTING_REQUEST;
  req: ReqSetting;
}

interface SettingSuccessAction {
  type: typeof SETTING_SUCCESS;
  language: Language;
}

interface SettingFailureAction {
  type: typeof SETTING_FAILURE;
}

interface ChangePhoneOtpIntervalAction {
  type: typeof CHANGE_PHONE_OTP_INTERVAL;
  status: OTPStatus;
}

interface ChangePhoneOtpAction {
  type: typeof CHANGE_PHONE_OTP;
  status: OTPStatus;
}

interface PhoneOtpRequestAction {
  type: typeof PHONE_OTP_REQUEST;
}

interface PhoneOtpSuccessAction {
  type: typeof PHONE_OTP_SUCCESS;
}

interface PhoneOtpFailureAction {
  type: typeof PHONE_OTP_FAILURE;
}

interface PhoneOtpVerificationRequestAction {
  type: typeof PHONE_OTP_VERIFICATION_REQUEST;
}

interface PhoneOtpVerificationSuccessAction {
  type: typeof PHONE_OTP_VERIFICATION_SUCCESS;
}

interface PhoneOtpVerificationFailureAction {
  type: typeof PHONE_OTP_VERIFICATION_FAILURE;
}

interface PhoneOtpResendRequestAction {
  type: typeof PHONE_OTP_RESEND_REQUEST;
}

interface PhoneOtpResendSuccessAction {
  type: typeof PHONE_OTP_RESEND_SUCCESS;
}

interface PhoneOtpResendFailureAction {
  type: typeof PHONE_OTP_RESEND_FAILURE;
}

type InitActionTypes =
  | ChangeLanguageAction
  | SettingRequestAction
  | SettingSuccessAction
  | SettingFailureAction
  | ChangePhoneOtpIntervalAction
  | ChangePhoneOtpAction
  | PhoneOtpRequestAction
  | PhoneOtpSuccessAction
  | PhoneOtpFailureAction
  | PhoneOtpVerificationRequestAction
  | PhoneOtpVerificationSuccessAction
  | PhoneOtpVerificationFailureAction
  | PhoneOtpResendRequestAction
  | PhoneOtpResendSuccessAction
  | PhoneOtpResendFailureAction;

// initial state
//
export interface SettingState {
  language: Language;
  phoneStatus: OTPStatus;
}

const initialState: SettingState = {
  language: Language.eng,
  phoneStatus: OTPStatus.none,
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: SettingState = initialState, action: InitActionTypes): SettingState => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    case SETTING_SUCCESS:
      return {
        ...state,
        language: action.language,
      };

    case SETTING_FAILURE:
      return {
        ...state,
      };

    case CHANGE_PHONE_OTP:
      return {
        ...state,
        phoneStatus: action.status,
      };

    case PHONE_OTP_SUCCESS:
      return {
        ...state,
        phoneStatus: OTPStatus.verification,
      };

    case PHONE_OTP_FAILURE:
      return {
        ...state,
        phoneStatus: OTPStatus.error,
      };

    case PHONE_OTP_VERIFICATION_SUCCESS:
      return {
        ...state,
        phoneStatus: OTPStatus.verified,
      };

    case PHONE_OTP_VERIFICATION_FAILURE:
      return {
        ...state,
        phoneStatus: OTPStatus.notVerified,
      };

    case PHONE_OTP_RESEND_SUCCESS:
      return {
        ...state,
        phoneStatus: OTPStatus.resent,
      };

    case PHONE_OTP_RESEND_FAILURE:
      return {
        ...state,
        phoneStatus: OTPStatus.error,
      };

    default:
      return state;
  }
};

// Actions
//
export const settingRequest = (req: ReqSetting) => ({
  type: SETTING_REQUEST,
  req,
});

export const changeLanguage = (language: Language) => ({ type: CHANGE_LANGUAGE, language });

export const changePhoneOtpInterval = (status: OTPStatus) => ({ type: CHANGE_PHONE_OTP_INTERVAL, status });
export const changePhoneOtp = (status: OTPStatus) => ({ type: CHANGE_PHONE_OTP, status });

export const phoneOtpRequest = (payload: ReqPhoneOtpRequest) => ({ type: PHONE_OTP_REQUEST, payload });

export const phoneOtpVerification = (phoneNumber: string, payload: ReqPhoneOtpVerification) => ({
  type: PHONE_OTP_VERIFICATION_REQUEST,
  phoneNumber,
  payload,
});

export const phoneOtpResend = (payload: ReqPhoneOtpRequest) => ({ type: PHONE_OTP_RESEND_REQUEST, payload });
