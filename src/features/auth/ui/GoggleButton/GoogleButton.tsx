'use client';
import { Button, ButtonProps } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';
import axios from 'axios';
import { useGoogleLogin } from '@react-oauth/google';
import { AuthApi } from '../../api';

export function GoogleButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const tokens = AuthApi.exchangeGoogleCode(codeResponse)

      console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return <Button leftSection={<GoogleIcon />} onClick={googleLogin} variant="default" {...props} />;
}
