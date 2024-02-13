import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const metadata = {
  title: 'ShadowChat',
  description: 'Basic Chat App Template',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="ru">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
