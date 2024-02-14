import { instance } from '@/src/config/axios';
import { BaseApi } from '@/src/config/axios/types';
import { CodeResponse } from '@react-oauth/google';

class CAuthApi extends BaseApi {
  /**
   * Функция производит обмен кода полученно при аутентификации через `@react-oauth` на токен backend.
   * Автоматически логинит пользователя и регистрирует его если аутентификация была впервые.
   * @param code Объект CodeResponse из `@react-oauth/google`.
   * @returns
   */
  async exchangeGoogleCode(code: Omit<CodeResponse, 'error' | 'error_description' | 'error_uri'>) {
    return this.instance.post('auth/google', { code: code.code });
  }
}
export const AuthApi = new CAuthApi(instance);
