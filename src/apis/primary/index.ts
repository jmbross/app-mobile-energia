import api from '@/apis/api';
import { PRIMARY_HOST } from '@/constants/environment';
import { ReqDashboard, ReqUsagePattern, ReqDR, ReqDrEarning, ReqMessage, ReqEventParticipate } from './types';

export const getSites = () => {
  const url = `${PRIMARY_HOST}/sites`;

  return api.get({ url });
};

export const selectSite = (siteId: string) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}`;

  return api.get({ url });
};

export const updateSite = (siteId: string, payload: { [k: string]: string }) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/update`;

  return api.patch({ url, payload });
};

export const deleteSite = (siteId: string) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/remove`;

  return api.patch({ url });
};

export const getDashboard = ({ siteId }: ReqDashboard) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/dashboard`;

  return api.get({ url });
};

export const getUsagePattern = ({ siteId, timePeriod, range }: ReqUsagePattern) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/usages?timePeriod=${timePeriod}&range=${range}`;

  return api.get({ url });
};

export const getDr = ({ siteId }: ReqDR) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/dr`;

  return api.get({ url });
};

export const getDrEarnings = ({ siteId }: ReqDrEarning) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/dr/earnings`;

  return api.get({ url });
};

export const getDrEvent = (siteId: string, eventId: string) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/dr/event/${eventId}`;

  return api.get({ url });
};

export const postDrEventParticipate = (siteId: string, payload: ReqEventParticipate) => {
  const url = `${PRIMARY_HOST}/sites/${siteId}/dr/request`;

  return api.post({ url, payload });
};

export const getMessages = () => {
  const url = `${PRIMARY_HOST}/messages`;

  return api.get({ url });
};

export const patchMessage = ({ messageId }: ReqMessage) => {
  const url = `${PRIMARY_HOST}/messages/${messageId}`;
  const payload: { [k: string]: string | boolean } = {
    isNewMessage: false,
  };

  return api.patch({ url, payload });
};

export const programs = (zipCode: string) => {
  const url = `${PRIMARY_HOST}/programs/${zipCode}`;

  return api.get({ url });
};
