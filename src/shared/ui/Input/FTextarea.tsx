import { Textarea, TextareaProps } from '@mantine/core';
import { useField } from 'formik';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';

export type FTextareaProps = Omit<TextareaProps, 'value'> & {
  name: string;
};

export const FTextarea = memo(({ name, onChange, ...rest }: FTextareaProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      helpers.setValue(e.currentTarget.value);
      onChange && onChange(e);
    },
    [onChange]
  );

  return <Textarea {...rest} value={field.value} onChange={handleChange} error={error} />;
});
