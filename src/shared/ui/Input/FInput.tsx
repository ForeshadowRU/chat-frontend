import { TextInput, TextInputProps } from '@mantine/core';
import { useField } from 'formik';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';

export type FInputProps = Omit<TextInputProps, 'value'> & {
  name: string;
};

export const FInput = memo(({ name, onChange, ...rest }: FInputProps) => {
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

  return <TextInput {...rest} value={field.value} onChange={handleChange} error={error} />;
});
