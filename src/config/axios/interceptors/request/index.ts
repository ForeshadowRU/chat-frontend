import { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'cookies-next';
import { ECookies } from '../../types';
/**
 * Отправляй все запросы с токеном пользователя (Bearer), если он есть.
 * Если нет, ничего не делай. Токен ожидается в Cookie имя который можно узнать в типах
 * @param config Конфиг Axios
 * @returns Конфиг Axios с потенциально модицифированным хедером Authorization
 */
export function userTokenInterceptor(
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig {
  const token = getCookie(ECookies.TOKEN);
  if (!token) {
    return config;
  }
  if (!config.headers) {
    config.headers = {} as AxiosHeaders;
  }
  config.headers['Authorization'] = `Bearer ${token}`;
  return config;
}
