export interface Programs {
  availablePrograms: Program[];
}

export interface UtilityPrograms {
  [utility: string]: Program[];
}

export interface Program {
  type: string;
  logo: string;
  logoSmall: string;
  logoLarge: string;
  program: string;
  utilityProvider: string;
  accountMaxLength: number;
  accountMinLength: number;
  screenStep: Screen[];
  // screenVisit
  zipcodes: string[];
  attributes: ProgramAttribute;
  // options
}

export enum UtilityProviderEnum {
  PGE = 'PGE',
  SCE = 'SCE',
  SDGE = 'SDGE',
}

export interface ProgramAttribute {
  moneyEarnedInProgram: boolean;
  moneyEarnedPerEvent: boolean;
  affirmativeOptIn: boolean;
  optInFromStart: boolean;
  optOutFromStart: boolean;
  optInCutoff: number;
  optOutCutoff: number;
}

export interface Screen {
  name: string;
  component: string;
  // navigation: string[];
  noThanks: string;
}

export interface Survey {
  question: string;
  code: string;
  answers: { [key: string]: string }[];
}

export interface SurveyAnswer {
  program: string;
  question: string;
  answer: string;
  other?: string;
  referralName?: string;
  referralEmail?: string;
  referralPhoneNumber?: string;
}

export interface ProgramRecent {
  program: string;
  provider: UtilityProviderEnum;
}
