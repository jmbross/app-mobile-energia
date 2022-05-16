// Types
//
// Phone number
export const CHANGE_PHONE_NUMBER = 'temporary/CHANGE_PHONE_NUMBER';

export const CHANGE_WEB_LOGIN = 'temporary/CHANGE_WEB_LOGIN';

interface ChangeLanguageAction {
  type: typeof CHANGE_PHONE_NUMBER;
  phoneNumber: string;
}

interface ChangeAppLoginAction {
  type: typeof CHANGE_WEB_LOGIN;
  appLogin: boolean;
}

type InitActionTypes = ChangeLanguageAction | ChangeAppLoginAction;

// initial state
//
export interface TemporaryState {
  phoneNumber: string;
  appLogin: boolean;
}

const initialState: TemporaryState = {
  phoneNumber: '',
  appLogin: false,
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: TemporaryState = initialState, action: InitActionTypes): TemporaryState => {
  switch (action.type) {
    case CHANGE_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };

    case CHANGE_WEB_LOGIN:
      return {
        ...state,
        appLogin: action.appLogin,
      };

    default:
      return state;
  }
};

// Actions
//
export const changePhoneNumber = (phoneNumber: string) => ({ type: CHANGE_PHONE_NUMBER, phoneNumber });

export const changeAppLogin = (appLogin: boolean) => ({ type: CHANGE_WEB_LOGIN, appLogin });
