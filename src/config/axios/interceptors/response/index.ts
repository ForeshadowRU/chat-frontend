import { TAxiosResponseInterceptorSuccess, TFileDownloadResponse } from '../../types';
import { prepareResponse } from './utils';

export const responderInterceptor: TAxiosResponseInterceptorSuccess = (response) => {
  if (response.config.responseType === 'blob') {
    const filename = response.headers['content-disposition']?.split('=')[1].replace('"', '');
    return { data: response.data, filename } as TFileDownloadResponse;
  }

  //здесь формируем удобный response
  try {
    return prepareResponse(response.data);
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error(error);
    //обработка ошибок в респонсе происходит в errorResponseInterceptor
    return response;
  }
};
