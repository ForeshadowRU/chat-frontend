import { Stack } from '@mantine/core';
import { Formik, FormikConfig, Form as FormikForm, FormikProps, FormikValues } from 'formik';
import React, { memo } from 'react';

type FormProps<T = FormikValues> = FormikConfig<T> & {
  className?: string;
  handleSubmit?: FormikProps<T>['handleSubmit'];
};

export function Form<T extends FormikValues = FormikValues>(formProps: FormProps<T>) {
  const { className, children, handleSubmit, ...formikConfig } = formProps;
  return (
    <Formik<T> {...formikConfig}>
      {(props) => (
        <FormikForm className={className} noValidate onClick={(e) => handleSubmit?.(e)}>
          <Stack>{typeof children === 'function' ? children(props) : children}</Stack>
        </FormikForm>
      )}
    </Formik>
  );
}

export default memo(Form);
