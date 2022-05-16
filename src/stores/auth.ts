import { ReqUpdateUserInfo } from '@/apis/auth/types';
import { GBCStatus, UserInfo } from '@/types/auth';
import { Language } from '@/types/setting';

// Types
//
// Login
export const RESET_AUTH_URL = 'auth/RESET_AUTH_URL';

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// Register
export const REGISTER_REQUEST = 'auth/REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

// Logout
export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';

// User Info
export const USER_INFO_REQUEST = 'auth/USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'auth/USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'auth/USER_INFO_FAILURE';

// Update User Info
export const UPDATE_USER_INFO_REQUEST = 'auth/UPDATE_USER_INFO_REQUEST';
export const UPDATE_USER_INFO_SUCCESS = 'auth/UPDATE_USER_INFO_SUCCESS';
export const UPDATE_USER_INFO_FAILURE = 'auth/UPDATE_USER_INFO_FAILURE';

// Clean State Old Persistent Data
export const CLEAN_OLD_STATE_DATA = 'auth/CLEAN_OLD_STATE_DATA';

interface ResetAuthUrlAction {
  type: typeof RESET_AUTH_URL;
}

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  language: Language;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  authUrl: string;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
}

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  authUrl: string;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
}

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
  token: string;
  userId: string;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
}

interface UserInfoRequestAction {
  type: typeof USER_INFO_REQUEST;
}

interface UserInfoSuccessAction {
  type: typeof USER_INFO_SUCCESS;
  userInfo: UserInfo;
}

interface UserInfoFailureAction {
  type: typeof USER_INFO_FAILURE;
}

interface UpdateUserInfoRequestAction {
  type: typeof UPDATE_USER_INFO_REQUEST;
  userInfo: UserInfo;
}

interface UpdateUserInfoSuccessAction {
  type: typeof UPDATE_USER_INFO_SUCCESS;
  userInfo: UserInfo;
}

interface UpdateUserInfoFailureAction {
  type: typeof UPDATE_USER_INFO_FAILURE;
}

interface CleanOldStateDataAction {
  type: typeof CLEAN_OLD_STATE_DATA;
}

type InitActionTypes =
  | ResetAuthUrlAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | RegisterFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction
  | UserInfoRequestAction
  | UserInfoSuccessAction
  | UserInfoFailureAction
  | UpdateUserInfoRequestAction
  | UpdateUserInfoSuccessAction
  | UpdateUserInfoFailureAction
  | CleanOldStateDataAction;

// initial state
//
export interface AuthState {
  // Olivine Auth Url
  authUrl?: string;

  // User Info
  userInfo: UserInfo;
}

const initialState: AuthState = {
  authUrl: undefined,
  userInfo: {
    id: '',
    isAuthenticated: false,
    oidcAccessToken: '',
    oidcIdToken: '',
    gbcStatus: GBCStatus.none,
    email: '',
    firstName: '',
    lastName: '',
    isLocationBusiness: false,
    zipcode: '',
    phoneNumber: '',
    siteName: '',
    language: '',
  },
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: AuthState = initialState, action: InitActionTypes): AuthState => {
  switch (action.type) {
    case RESET_AUTH_URL: {
      return {
        ...state,
        authUrl: undefined,
      };
    }

    case LOGIN_SUCCESS:
      return {
        ...state,
        authUrl: action.authUrl,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        authUrl: undefined,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        authUrl: action.authUrl,
      };

    case REGISTER_FAILURE:
      return {
        ...state,
      };

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };

    case LOGOUT_FAILURE:
      return {
        ...state,
      };

    case USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          id: action.userInfo.id,
          isAuthenticated: action.userInfo.isAuthenticated,
          oidcAccessToken: action.userInfo.oidcAccessToken,
          oidcIdToken: action.userInfo.oidcIdToken,
          gbcStatus: action.userInfo.gbcStatus,
          email: action.userInfo.email,
          firstName: action.userInfo.firstName,
          lastName: action.userInfo.lastName,
          isLocationBusiness: action.userInfo.isLocationBusiness,
          zipcode: action.userInfo.zipcode,
          phoneNumber: action.userInfo.phoneNumber,
          siteName: action.userInfo.siteName,
          language: action.userInfo.language,
        },
      };

    case USER_INFO_FAILURE:
      return {
        ...state,
      };

    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: Object.assign(state.userInfo, action.userInfo),
      };

    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
      };

    case CLEAN_OLD_STATE_DATA:
      const cleanState: any = { ...state };
      cleanState.user ? delete cleanState.user : cleanState;
      return {
        ...cleanState,
      };

    default:
      return state;
  }
};

// Actions
//
export const resetAuthUrl = () => ({ type: RESET_AUTH_URL });

export const loginRequest = (language: Language) => ({ type: LOGIN_REQUEST, language });

export const registerRequest = (language: Language) => ({ type: REGISTER_REQUEST, language });

export const logoutRequest = (token: string, userId: string) => ({
  type: LOGOUT_REQUEST,
  token,
  userId,
});

export const userInfoRequest = (callback: (gbcStatus: GBCStatus) => void) => ({ type: USER_INFO_REQUEST, callback });

export const updateUserInfoRequest = (userInfo: ReqUpdateUserInfo, callback?: () => void) => ({
  type: UPDATE_USER_INFO_REQUEST,
  userInfo,
  callback,
});

export const cleanOldStateData = () => ({ type: CLEAN_OLD_STATE_DATA });
