import Axios from 'axios';

import { userTokenInterceptor } from '../interceptors/request';
import { responderInterceptor } from '../interceptors/response';

export const instance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  responseType: 'json',
});

/**
 *  Добавляй header token
 */
instance.interceptors.request.use(userTokenInterceptor);

/**
 *  Интерцептор обрабатывающий все респонсы
 */
instance.interceptors.response.use(responderInterceptor);
