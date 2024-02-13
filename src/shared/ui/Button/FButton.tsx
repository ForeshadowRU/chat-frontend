import React, { forwardRef } from 'react';
import { Button, ButtonProps, createPolymorphicComponent } from '@mantine/core';

type FButtonProps = ButtonProps;

export const FButton = createPolymorphicComponent<'button', FButtonProps>(
  forwardRef<HTMLButtonElement, FButtonProps>(({ children, ...others }, ref) => (
    <Button {...others} ref={ref} type="submit">
      {children}
    </Button>
  ))
);
