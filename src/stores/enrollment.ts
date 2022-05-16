import { ReqIntegrations, ReqVerify } from '@/apis/enrollment/types';
import { ProgramRecent, Program, SurveyAnswer, UtilityPrograms } from '@/types/enrollment';

// Types
//
// Reset
export const RESET_ENROLLMENT = 'enrollment/RESET';

// Enrollment
export const CHANGE_FIST_NAME = 'enrollment/CHANGE_FIST_NAME';
export const CHANGE_LAST_NAME = 'enrollment/CHANGE_LAST_NAME';
export const CHANGE_SERVICE_FIRST_NAME = 'enrollment/CHANGE_SERVICE_FIRST_NAME';
export const CHANGE_SERVICE_LAST_NAME = 'enrollment/CHANGE_SERVICE_LAST_NAME';
export const CHANGE_SERVICE_ACCOUNT_NUMBER = 'enrollment/CHANGE_SERVICE_ACCOUNT_NUMBER';
export const CHANGE_SERVICE_ADDRESS = 'enrollment/CHANGE_SERVICE_ADDRESS';
export const CHANGE_SERVICE_CITY = 'enrollment/CHANGE_SERVICE_CITY';
export const CHANGE_SERVICE_ZIP = 'enrollment/CHANGE_SERVICE_ZIP';
export const CHANGE_SERVICE_PHONE = 'enrollment/CHANGE_SERVICE_PHONE';
export const CHANGE_SERVICE_EMAIL = 'enrollment/CHANGE_SERVICE_EMAIL';
export const CHANGE_IS_BUSINESS = 'enrollment/CHANGE_IS_BUSINESS';
export const CHANGE_ZIP_CODE = 'enrollment/CHANGE_ZIP_CODE';
export const CHANGE_SITE_NAME = 'enrollment/CHANGE_SITE_NAME';
export const CHANGE_VERIFICATION_NAME = 'enrollment/CHANGE_VERIFICATION_NAME';
export const CHANGE_VERIFICATION_ACCOUNT_NUMBER = 'enrollment/CHANGE_ACCOUNT_NUMBER';
export const CHANGE_AGREE_AVAILABLE = 'enrollment/CHANGE_AGREE_AVAILABLE';
export const CHANGE_UTILITY = 'enrollment/CHANGE_UTILITY';
export const CHANGE_SINGLE_SURVEY = 'enrollment/CHANGE_SINGLE_SURVEY';
export const CHANGE_MULTI_SURVEY = 'enrollment/CHANGE_MULTI_SURVEY';

// Program
export const PROGRAM_REQUEST = 'enrollment/PROGRAM_REQUEST';
export const PROGRAM_SUCCESS = 'enrollment/PROGRAM_SUCCESS';
export const PROGRAM_FAILURE = 'enrollment/PROGRAM_FAILURE';

export const CHANGE_PROGRAM = 'enrollment/CHANGE_PROGRAM';
export const CHANGE_PROGRAMS = 'enrollment/CHANGE_PROGRAMS';
export const RESTORE_PROGRAM = 'enrollment/RESTORE_PROGRAM';
export const RESET_PROGRAM = 'enrollment/RESET_PROGRAM';

// Verification
export const VERIFY_REQUEST = 'enrollment/VERIFY_REQUEST';
export const VERIFY_SUCCESS = 'enrollment/VERIFY_SUCCESS';
export const VERIFY_FAILURE = 'enrollment/VERIFY_FAILURE';

// Connect to utility
export const RESET_GBC = 'enrollment/RESET_GBC';

export const GBC_REQUEST = 'enrollment/GBC_REQUEST';
export const GBC_SUCCESS = 'enrollment/GBC_SUCCESS';
export const GBC_FAILURE = 'enrollment/GBC_FAILURE';

export const CHANGE_GBC_RESULT = 'enrollment/CHANGE_GBC_RESULT';

// Survey
export const SURVEY_REQUEST = 'enrollment/SURVEY_REQUEST';
export const SURVEY_SUCCESS = 'enrollment/SURVEY_SUCCESS';
export const SURVEY_FAILURE = 'enrollment/SURVEY_FAILURE';

// Recent Program
export const RECENT_REQUEST = 'enrollment/RECENT_REQUEST';
export const RECENT_SUCCESS = 'enrollment/RECENT_SUCCESS';
export const RECENT_FAILURE = 'enrollment/RECENT_FAILURE';

interface ResetEnrollmentAction {
  type: typeof RESET_ENROLLMENT;
}

interface ChangeFirstNameAction {
  type: typeof CHANGE_FIST_NAME;
  firstName: string;
}

interface ChangeLastNameAction {
  type: typeof CHANGE_LAST_NAME;
  lastName: string;
}

interface ChangeServiceFirstNameAction {
  type: typeof CHANGE_SERVICE_FIRST_NAME;
  serviceFirstName: string;
}

interface ChangeServiceLastNameAction {
  type: typeof CHANGE_SERVICE_LAST_NAME;
  serviceLastName: string;
}

interface ChangeServiceAccount {
  type: typeof CHANGE_SERVICE_ACCOUNT_NUMBER;
  serviceAccountNumber: string;
}

interface ChangeServiceAddress {
  type: typeof CHANGE_SERVICE_ADDRESS;
  serviceAddress: string;
}

interface ChangeServiceCity {
  type: typeof CHANGE_SERVICE_CITY;
  serviceCity: string;
}

interface ChangeServiceZip {
  type: typeof CHANGE_SERVICE_ZIP;
  serviceZip: string;
}

interface ChangeServicePhone {
  type: typeof CHANGE_SERVICE_PHONE;
  servicePhone: string;
}

interface ChangeServiceEmail {
  type: typeof CHANGE_SERVICE_EMAIL;
  serviceEmail: string;
}

interface ChangeIsBusinessAction {
  type: typeof CHANGE_IS_BUSINESS;
  isBusiness: boolean;
}

interface ChangeZipcodeAction {
  type: typeof CHANGE_ZIP_CODE;
  zipCode: string;
}

interface ChangeSiteNameAction {
  type: typeof CHANGE_SITE_NAME;
  siteName: string;
}

interface ChangeVerificationNameAction {
  type: typeof CHANGE_VERIFICATION_NAME;
  verificationName: string;
}

interface ChangeVerificationAccountNumberAction {
  type: typeof CHANGE_VERIFICATION_ACCOUNT_NUMBER;
  verificationAccountNumber: string;
}

interface ChangeAgreeAvailableAction {
  type: typeof CHANGE_AGREE_AVAILABLE;
  agreeAvailable: boolean;
}

interface ChangeUtilityAction {
  type: typeof CHANGE_UTILITY;
  utility: string;
}

interface ChangeSingleSurveyAction {
  type: typeof CHANGE_SINGLE_SURVEY;
  answer: SurveyAnswer;
}

interface ChangeMultipleSurveyAction {
  type: typeof CHANGE_MULTI_SURVEY;
  answer: SurveyAnswer[];
}

interface ProgramRequestAction {
  type: typeof PROGRAM_REQUEST;
  zipCode: string;
  callback: () => {};
}

interface ProgramSuccessAction {
  type: typeof PROGRAM_SUCCESS;
  utilityPrograms: UtilityPrograms;
}

interface ProgramFailureAction {
  type: typeof PROGRAM_FAILURE;
}

interface ChangeProgramsAction {
  type: typeof CHANGE_PROGRAMS;
  programs: Program[];
}

interface ChangeProgramAction {
  type: typeof CHANGE_PROGRAM;
  enrollmentProgram: Program;
}

interface RestoreProgramAction {
  type: typeof RESTORE_PROGRAM;
}

interface ResetProgramAction {
  type: typeof RESET_PROGRAM;
  enrollmentProgram: Program;
}

interface VerifyRequestAction {
  type: typeof VERIFY_REQUEST;
}

interface VerifySuccessAction {
  type: typeof VERIFY_SUCCESS;
  areAllServiceAccountsAuthorized: boolean;
}

interface VerifyFailureAction {
  type: typeof VERIFY_FAILURE;
}

interface ResetGbcAction {
  type: typeof RESET_GBC;
}

interface ChangeGbcAction {
  type: typeof CHANGE_GBC_RESULT;
  result: string;
}

interface GbcRequestAction {
  type: typeof GBC_REQUEST;
  payload: ReqIntegrations;
}

interface GbcSuccessAction {
  type: typeof GBC_SUCCESS;
  gbcUrl: string;
}

interface GbcFailureAction {
  type: typeof GBC_FAILURE;
}

interface SurveyRequestAction {
  type: typeof SURVEY_REQUEST;
  survey: SurveyAnswer[];
}

interface SurveySuccessAction {
  type: typeof SURVEY_SUCCESS;
  gbcUrl: string;
}

interface SurveyFailureAction {
  type: typeof SURVEY_FAILURE;
}

interface RecentRequestAction {
  type: typeof RECENT_REQUEST;
}

interface RecentSuccessAction {
  type: typeof RECENT_SUCCESS;
  recent: ProgramRecent;
}

interface RecentFailureAction {
  type: typeof RECENT_FAILURE;
}

type InitActionTypes =
  | ResetEnrollmentAction
  | ChangeFirstNameAction
  | ChangeLastNameAction
  | ChangeServiceFirstNameAction
  | ChangeServiceLastNameAction
  | ChangeServiceAccount
  | ChangeServiceAddress
  | ChangeServiceCity
  | ChangeServiceZip
  | ChangeServicePhone
  | ChangeServiceEmail
  | ChangeIsBusinessAction
  | ChangeZipcodeAction
  | ChangeSiteNameAction
  | ChangeVerificationNameAction
  | ChangeVerificationAccountNumberAction
  | ChangeAgreeAvailableAction
  | ChangeUtilityAction
  | ChangeSingleSurveyAction
  | ChangeMultipleSurveyAction
  | ProgramRequestAction
  | ProgramSuccessAction
  | ProgramFailureAction
  | ChangeProgramsAction
  | ChangeProgramAction
  | RestoreProgramAction
  | ResetProgramAction
  | VerifyRequestAction
  | VerifySuccessAction
  | VerifyFailureAction
  | ResetGbcAction
  | ChangeGbcAction
  | GbcRequestAction
  | GbcSuccessAction
  | GbcFailureAction
  | SurveyRequestAction
  | SurveySuccessAction
  | SurveyFailureAction
  | RecentRequestAction
  | RecentSuccessAction
  | RecentFailureAction;

// initial state
//
export interface EnrollmentState {
  enrollmentInfo: {
    firstName: string;
    lastName: string;
    serviceFirstName: string;
    serviceLastName: string;
    serviceAccountNumber: string;
    serviceAddress: string;
    serviceCity: string;
    serviceZip: string;
    servicePhone: string;
    serviceEmail: string;
    isBusiness: boolean;
    zipCode: string;
    program: string;
    siteName: string;
    verificationName: string;
    verificationAccountNumber: string;
    areAllServiceAccountsAuthorized: boolean;
    agreeAvailable: boolean;
    utility: string;
    gbcUrl: string;
    gbcUrlResult: string;
    singleSurvey: SurveyAnswer;
    multipleSurvey: SurveyAnswer[];
  };
  programs: {
    prevProgram: Program[];
    currentProgram: Program;
    availablePrograms: Program[];
  };
  utilityPrograms: {};
}

const initialState: EnrollmentState = {
  enrollmentInfo: {
    firstName: '',
    lastName: '',
    serviceFirstName: '',
    serviceLastName: '',
    serviceAccountNumber: '',
    serviceAddress: '',
    serviceCity: '',
    serviceZip: '',
    servicePhone: '',
    serviceEmail: '',
    isBusiness: false,
    zipCode: '',
    siteName: '',
    program: '',
    verificationName: '',
    verificationAccountNumber: '',
    areAllServiceAccountsAuthorized: false,
    agreeAvailable: false,
    utility: '',
    gbcUrl: '',
    gbcUrlResult: '',
    singleSurvey: {
      program: '',
      question: '',
      answer: '',
      other: undefined,
      referralName: undefined,
      referralEmail: undefined,
      referralPhoneNumber: undefined,
    },
    multipleSurvey: [],
  },
  programs: {
    prevProgram: [],
    currentProgram: {
      type: '',
      logo: '',
      logoSmall: '',
      logoLarge: '',
      program: '',
      utilityProvider: '',
      accountMaxLength: 0,
      accountMinLength: 0,
      screenStep: [],
      zipcodes: [],
      attributes: {
        moneyEarnedInProgram: false,
        moneyEarnedPerEvent: false,
        affirmativeOptIn: false,
        optInFromStart: false,
        optOutFromStart: false,
        optInCutoff: 0,
        optOutCutoff: 0,
      },
      // options
    },
    availablePrograms: [],
  },
  utilityPrograms: {},
};

// Reducer
//
// eslint-disable-next-line default-param-last
export default (state: EnrollmentState = initialState, action: InitActionTypes): EnrollmentState => {
  switch (action.type) {
    case RESET_ENROLLMENT:
      return {
        ...initialState,
      };

    case CHANGE_FIST_NAME:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, firstName: action.firstName },
      };

    case CHANGE_LAST_NAME:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, lastName: action.lastName },
      };

    case CHANGE_SERVICE_FIRST_NAME:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, serviceFirstName: action.serviceFirstName },
      };

    case CHANGE_SERVICE_LAST_NAME:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, serviceLastName: action.serviceLastName },
      };

    case CHANGE_SERVICE_ACCOUNT_NUMBER:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, serviceAccountNumber: action.serviceAccountNumber },
      };

    case CHANGE_SERVICE_ADDRESS:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, serviceAddress: action.serviceAddress },
      };

    case CHANGE_SERVICE_CITY:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, serviceCity: action.serviceCity },
      };

    case CHANGE_SERVICE_ZIP:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, serviceZip: action.serviceZip },
      };

    case CHANGE_SERVICE_PHONE:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, servicePhone: action.servicePhone },
      };

    case CHANGE_SERVICE_EMAIL:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, serviceEmail: action.serviceEmail },
      };

    case CHANGE_IS_BUSINESS:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, isBusiness: action.isBusiness },
      };

    case CHANGE_ZIP_CODE:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, zipCode: action.zipCode },
      };

    case CHANGE_SITE_NAME:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, siteName: action.siteName },
      };

    case CHANGE_VERIFICATION_NAME:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, verificationName: action.verificationName },
      };

    case CHANGE_VERIFICATION_ACCOUNT_NUMBER:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, verificationAccountNumber: action.verificationAccountNumber },
      };

    case CHANGE_AGREE_AVAILABLE:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, agreeAvailable: action.agreeAvailable },
      };

    case CHANGE_UTILITY:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, utility: action.utility },
      };

    case CHANGE_SINGLE_SURVEY:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, singleSurvey: action.answer },
      };

    case CHANGE_MULTI_SURVEY:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, multipleSurvey: action.answer },
      };

    case VERIFY_SUCCESS:
      return {
        ...state,
        enrollmentInfo: {
          ...state.enrollmentInfo,
          areAllServiceAccountsAuthorized: action.areAllServiceAccountsAuthorized,
        },
      };

    case VERIFY_FAILURE:
      return {
        ...state,
      };

    case RESET_GBC:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, gbcUrl: '' },
      };

    case CHANGE_GBC_RESULT:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, gbcUrlResult: action.result },
      };

    case GBC_SUCCESS:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, gbcUrl: action.gbcUrl },
      };

    case GBC_FAILURE:
      return {
        ...state,
      };

    case SURVEY_SUCCESS:
      return {
        ...state,
      };

    case SURVEY_FAILURE:
      return {
        ...state,
      };

    case PROGRAM_SUCCESS:
      return {
        ...state,
        utilityPrograms: action.utilityPrograms,
      };

    case PROGRAM_FAILURE:
      return {
        ...state,
      };

    case CHANGE_PROGRAMS:
      const defaultProgram = action.programs.length > 0 ? action.programs[0] : initialState.programs.currentProgram;
      return {
        ...state,
        programs: {
          ...state.programs,
          availablePrograms: action.programs,
          prevProgram: [],
          currentProgram: action.programs.map((p) => p.program).includes(state.programs.currentProgram?.program)
            ? state.programs.currentProgram
            : defaultProgram,
        },
      };

    case CHANGE_PROGRAM:
      return {
        ...state,
        programs: {
          ...state.programs,
          prevProgram: [...state.programs.prevProgram, action.enrollmentProgram],
          currentProgram: action.enrollmentProgram,
        },
      };

    case RESTORE_PROGRAM:
      state.programs.prevProgram.pop();
      return {
        ...state,
        programs: {
          ...state.programs,
          currentProgram: state.programs.prevProgram[state.programs.prevProgram.length - 1] || [],
          prevProgram: state.programs.prevProgram,
        },
      };

    case RESET_PROGRAM:
      return {
        ...state,
        programs: {
          ...state.programs,
          prevProgram: [],
          currentProgram: action.enrollmentProgram,
        },
      };

    case RECENT_SUCCESS:
      return {
        ...state,
        enrollmentInfo: { ...state.enrollmentInfo, program: action.recent.program, utility: action.recent.provider },
      };

    case RECENT_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
};

// Actions
//
export const changeFirstName = (firstName: string) => ({ type: CHANGE_FIST_NAME, firstName });
export const changeLastName = (lastName: string) => ({ type: CHANGE_LAST_NAME, lastName });
export const changeServiceFirstName = (serviceFirstName: string) => ({
  type: CHANGE_SERVICE_FIRST_NAME,
  serviceFirstName,
});
export const changeServiceLastName = (serviceLastName: string) => ({ type: CHANGE_SERVICE_LAST_NAME, serviceLastName });
export const changeServiceAccount = (serviceAccountNumber: string) => ({
  type: CHANGE_SERVICE_ACCOUNT_NUMBER,
  serviceAccountNumber,
});
export const changeServiceAddress = (serviceAddress: string) => ({ type: CHANGE_SERVICE_ADDRESS, serviceAddress });
export const changeServiceCity = (serviceCity: string) => ({ type: CHANGE_SERVICE_CITY, serviceCity });
export const changeServiceZip = (serviceZip: string) => ({ type: CHANGE_SERVICE_ZIP, serviceZip });
export const changeServicePhone = (servicePhone: string) => ({ type: CHANGE_SERVICE_PHONE, servicePhone });
export const changeServiceEmail = (serviceEmail: string) => ({ type: CHANGE_SERVICE_EMAIL, serviceEmail });
export const changeIsBusiness = (isBusiness: boolean) => ({ type: CHANGE_IS_BUSINESS, isBusiness });
export const changeZipcode = (zipCode: string) => ({ type: CHANGE_ZIP_CODE, zipCode });
export const changeSiteName = (siteName: string) => ({ type: CHANGE_SITE_NAME, siteName });
export const changeVerificationName = (verificationName: string) => ({
  type: CHANGE_VERIFICATION_NAME,
  verificationName,
});
export const changeVerificationAccountNumber = (verificationAccountNumber: string) => ({
  type: CHANGE_VERIFICATION_ACCOUNT_NUMBER,
  verificationAccountNumber,
});
export const changeAgreeAvailable = (agreeAvailable: boolean) => ({ type: CHANGE_AGREE_AVAILABLE, agreeAvailable });
export const changeUtility = (utility: string) => ({ type: CHANGE_UTILITY, utility });
export const changeSingleSurvey = (answer: SurveyAnswer) => ({ type: CHANGE_SINGLE_SURVEY, answer });
export const changeMultipleSurvey = (answer: SurveyAnswer[]) => ({ type: CHANGE_MULTI_SURVEY, answer });

export const verifyRequest = (payload: ReqVerify, success: () => void, failure: () => void) => ({
  type: VERIFY_REQUEST,
  payload,
  success,
  failure,
});

export const gbcRequest = (payload: ReqIntegrations, success: (url: string) => void) => ({
  type: GBC_REQUEST,
  payload,
  success,
});

export const gbcResult = (result: string) => ({ type: CHANGE_GBC_RESULT, result });

export const resetGBC = () => ({ type: RESET_GBC });

export const surveyRequest = (payload: SurveyAnswer[], callback: (success: boolean) => void) => ({
  type: SURVEY_REQUEST,
  payload,
  callback,
});

export const programRequest = (zipCode: string, callback?: (utilityPrograms: UtilityPrograms) => void) => ({
  type: PROGRAM_REQUEST,
  zipCode,
  callback,
});
export const changePrograms = (programs: Program[]) => ({ type: CHANGE_PROGRAMS, programs });
export const changeProgram = (enrollmentProgram: Program) => ({ type: CHANGE_PROGRAM, enrollmentProgram });
export const restoreProgram = () => ({ type: RESTORE_PROGRAM });
export const resetProgram = (enrollmentProgram: Program) => ({ type: RESET_PROGRAM, enrollmentProgram });

export const recentRequest = () => ({ type: RECENT_REQUEST });
