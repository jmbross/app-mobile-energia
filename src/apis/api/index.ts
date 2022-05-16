import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { interceptor } from '@/services/axiosInterceptors';
import { printDebug, printError } from '@/helpers/DebugHelper';
import * as T from './type';

const buildHeaders = (headers?: object) => {
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };
};

export interface IResponse {
  success: boolean;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  data?: any;
  error?: {
    code?: string;
    message: string;
  };
}

const thenResponse = (response: AxiosResponse): Promise<IResponse> => {
  printDebug('API Success', response);

  if (response.status >= 200 && response.status <= 204) {
    const data: IResponse = { success: true, data: response.data };
    return Promise.resolve(data);
  }

  const data: IResponse = { success: false, data: response.data };
  return Promise.reject(data);
};

const catchResponse = (error: AxiosError): Promise<IResponse> => {
  printError('API Failure', error);

  const data: IResponse = { success: false, error: { code: error.code, message: error.message } };
  return Promise.reject(data);
};

export const Request = ({ method, url, headers, payload, useParams }: T.ApiRequestProps) => {
  // Call Refresh Token
  interceptor();

  const option: AxiosRequestConfig = {
    url,
    method,
    headers: buildHeaders(headers),
    timeout: 60000,
    withCredentials: false,
    responseType: 'json',
  };

  if (method === 'get') {
    option.params = payload;
  }

  if (['post', 'patch', 'put', 'delete'].includes(method)) {
    if (useParams) {
      option.params = payload;
    } else {
      option.data = payload;
    }
  }

  return axios(option).then(thenResponse).catch(catchResponse);
};

const api = {
  get: ({ url, headers, payload }: T.ApiProps) => {
    return Request({ method: 'get', url, headers, payload });
  },
  post: ({ url, headers, payload, useParams }: T.ApiProps) => {
    return Request({ method: 'post', url, headers, payload, useParams });
  },
  patch: ({ url, headers, payload }: T.ApiProps) => {
    return Request({ method: 'patch', url, headers, payload });
  },
  put: ({ url, headers, payload }: T.ApiProps) => {
    return Request({ method: 'put', url, headers, payload });
  },
  delete: ({ url, headers, payload }: T.ApiProps) => {
    return Request({ method: 'delete', url, headers, payload });
  },
};

export default api;
