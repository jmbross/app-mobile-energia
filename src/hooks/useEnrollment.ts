import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  changeFirstName,
  changeLastName,
  changeServiceFirstName,
  changeServiceLastName,
  changeServiceAccount,
  changeServiceAddress,
  changeServiceCity,
  changeServiceZip,
  changeServicePhone,
  changeServiceEmail,
  changeIsBusiness,
  changeZipcode,
  changeSiteName,
  changeVerificationName,
  changeVerificationAccountNumber,
  changeAgreeAvailable,
  changeUtility,
  changeSingleSurvey,
  changeMultipleSurvey,
  verifyRequest,
  gbcRequest,
  gbcResult,
  resetGBC,
  surveyRequest,
  programRequest,
  changeProgram,
  restoreProgram,
  resetProgram,
  recentRequest,
  changePrograms,
} from '@/stores/enrollment';
import { Program, SurveyAnswer, UtilityPrograms } from '@/types/enrollment';
import { ReqIntegrations, ReqVerify } from '@/apis/enrollment/types';

export default function useEnrollment() {
  const dispatch = useDispatch();

  const fetchFirstName = useCallback((firstName: string) => dispatch(changeFirstName(firstName)), [dispatch]);

  const fetchLastName = useCallback((lastName: string) => dispatch(changeLastName(lastName)), [dispatch]);

  const fetchServiceFirstName = useCallback(
    (firstName: string) => dispatch(changeServiceFirstName(firstName)),
    [dispatch],
  );

  const fetchServiceLastName = useCallback((lastName: string) => dispatch(changeServiceLastName(lastName)), [dispatch]);

  const fetchServiceAccountNumber = useCallback(
    (serviceAccountNumber: string) => dispatch(changeServiceAccount(serviceAccountNumber)),
    [dispatch],
  );

  const fetchServiceAddress = useCallback(
    (serviceAddress: string) => dispatch(changeServiceAddress(serviceAddress)),
    [dispatch],
  );

  const fetchServiceCity = useCallback((serviceCity: string) => dispatch(changeServiceCity(serviceCity)), [dispatch]);

  const fetchServiceZip = useCallback((serviceZip: string) => dispatch(changeServiceZip(serviceZip)), [dispatch]);

  const fetchServicePhone = useCallback(
    (servicePhone: string) => dispatch(changeServicePhone(servicePhone)),
    [dispatch],
  );

  const fetchServiceEmail = useCallback(
    (serviceEmail: string) => dispatch(changeServiceEmail(serviceEmail)),
    [dispatch],
  );

  const fetchIsBusiness = useCallback((isBusiness: boolean) => dispatch(changeIsBusiness(isBusiness)), [dispatch]);

  const fetchZipcode = useCallback((zipcode: string) => dispatch(changeZipcode(zipcode)), [dispatch]);

  const fetchSiteName = useCallback((siteName: string) => dispatch(changeSiteName(siteName)), [dispatch]);

  const fetchVerificationName = useCallback(
    (verificationName: string) => dispatch(changeVerificationName(verificationName)),
    [dispatch],
  );

  const fetchVerificationAccountNumber = useCallback(
    (verificationAccountNumber: string) => dispatch(changeVerificationAccountNumber(verificationAccountNumber)),
    [dispatch],
  );

  const fetchAgreeAvailable = useCallback(
    (agreeAvailable: boolean) => dispatch(changeAgreeAvailable(agreeAvailable)),
    [dispatch],
  );

  const fetchUtility = useCallback((utility: string) => dispatch(changeUtility(utility)), [dispatch]);

  const fetchSingleSurvey = useCallback((answer: SurveyAnswer) => dispatch(changeSingleSurvey(answer)), [dispatch]);

  const fetchMultipleSurvey = useCallback(
    (answer: SurveyAnswer[]) => dispatch(changeMultipleSurvey(answer)),
    [dispatch],
  );

  const fetchVerify = useCallback(
    (payload: ReqVerify, success: () => void, failure: () => void) => {
      dispatch(verifyRequest(payload, success, failure));
    },
    [dispatch],
  );

  const fetchGBC = useCallback(
    (payload: ReqIntegrations, success: (url: string) => void) => {
      dispatch(gbcRequest(payload, success));
    },
    [dispatch],
  );

  const fetchGBCResult = useCallback(
    (result: string) => {
      dispatch(gbcResult(result));
    },
    [dispatch],
  );

  const fetchResetGBC = useCallback(() => {
    dispatch(resetGBC());
  }, [dispatch]);

  const fetchSurvey = useCallback(
    (payload: SurveyAnswer[], callback: (success: boolean) => void) => dispatch(surveyRequest(payload, callback)),
    [dispatch],
  );

  const fetchProgramRequest = useCallback(
    (zipCode: string, callback?: (utilityPrograms: UtilityPrograms) => void) =>
      dispatch(programRequest(zipCode, callback)),
    [dispatch],
  );

  const fetchChangePrograms = useCallback((programs: Program[]) => dispatch(changePrograms(programs)), [dispatch]);

  const fetchChangeProgram = useCallback(
    (program: Program, callback?: (program: Program) => void) => {
      dispatch(changeProgram(program));

      if (callback) {
        callback(program);
      }
    },
    [dispatch],
  );
  const fetchRestoreProgram = useCallback(() => dispatch(restoreProgram()), [dispatch]);

  const fetchResetProgram = useCallback((enrollmentProgram) => dispatch(resetProgram(enrollmentProgram)), [dispatch]);

  const fetchRecentRequest = useCallback(() => dispatch(recentRequest()), [dispatch]);

  return {
    fetchFirstName,
    fetchLastName,
    fetchServiceFirstName,
    fetchServiceLastName,
    fetchServiceAccountNumber,
    fetchServiceAddress,
    fetchServiceCity,
    fetchServiceZip,
    fetchServicePhone,
    fetchServiceEmail,
    fetchIsBusiness,
    fetchZipcode,
    fetchSiteName,
    fetchVerificationName,
    fetchVerificationAccountNumber,
    fetchAgreeAvailable,
    fetchUtility,
    fetchSingleSurvey,
    fetchMultipleSurvey,
    fetchVerify,
    fetchGBC,
    fetchGBCResult,
    fetchResetGBC,
    fetchSurvey,
    fetchProgramRequest,
    fetchChangePrograms,
    fetchChangeProgram,
    fetchRestoreProgram,
    fetchResetProgram,
    fetchRecentRequest,
  };
}
