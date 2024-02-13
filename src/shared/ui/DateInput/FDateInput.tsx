import { DateInput, DateInputProps, DateValue } from '@mantine/dates';
import { useField } from 'formik';
import { memo, useCallback, useMemo } from 'react';

export type FDateInputProps = Omit<DateInputProps, 'value'> & {
  name: string;
};

export const FDateInput = memo(({ name, onChange, ...rest }: FDateInputProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (value: DateValue) => {
      helpers.setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  return <DateInput {...rest} value={field.value} onChange={handleChange} error={error} />;
});
