import { Text, TextProps } from '@mantine/core';
import React from 'react';

type FErrorProps = TextProps & { error?: string };

export const FError: React.FC<FErrorProps> = ({ error, ...rest }) => {
  if (!error) {
    return null;
  }
  return (
    <Text c="red" {...rest}>
      {error}
    </Text>
  );
};
