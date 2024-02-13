import { PasswordInput, PasswordInputProps } from '@mantine/core';
import { useField } from 'formik';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';

export type FPasswordInputProps = Omit<PasswordInputProps, 'value'> & {
  name: string;
};

export const FPasswordInput = memo(({ name, onChange, ...rest }: FPasswordInputProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      helpers.setValue(e.currentTarget.value);
      onChange && onChange(e);
    },
    [onChange]
  );

  return <PasswordInput {...rest} value={field.value} onChange={handleChange} error={error} />;
});
