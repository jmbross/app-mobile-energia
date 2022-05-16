export interface ReqIntegrations {
  provider: string;
  program: string;
}

export interface ReqPhoneOtpRequest {
  phoneNumber: string;
}

export interface ReqPhoneOtpVerification {
  otp: string;
}

export interface ReqVerify {
  program: string;
  lastName: string;
  accountNumber: string;
  zipCode: string;
}

export interface ReqSurveyAnswer {
  program: string;
  question: string;
  answer: string;
  other?: string;
  referralName?: string;
  referralEmail?: string;
  referralPhoneNumber?: string;
}
