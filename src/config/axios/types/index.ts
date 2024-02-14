import { AxiosInstance, AxiosInterceptorOptions } from 'axios';

type TAxiosRequestInterceptors = Parameters<AxiosInstance['interceptors']['request']['use']>;
export type TAxiosRequestInterceptorSuccess = TAxiosRequestInterceptors[0];

type TAxiosResponseInterceptors = Parameters<AxiosInstance['interceptors']['response']['use']>;
export type TAxiosResponseInterceptorSuccess = TAxiosResponseInterceptors[0];
export type TAxiosResponseInterceptorError = TAxiosResponseInterceptors[1];

/**
 * Нельзя использовать с Response Interceptor @link https://github.com/axios/axios/issues/5074
 */
export type TAxiosRunWhen = AxiosInterceptorOptions['runWhen'];

export type TFileDownloadResponse = {
  data: Blob;
  filename: string;
};

export type TResponseError = {
  message: string;
  errors?: Record<string, string[]> | { message: string };
};

export enum ECookies {
  TOKEN = 'token',
  REFRESH_TOKEN = 'Refresh_token',
  USER_ROLE = 'User_role',
}
export abstract class BaseApi {
  constructor(protected readonly instance: AxiosInstance) {}
}
