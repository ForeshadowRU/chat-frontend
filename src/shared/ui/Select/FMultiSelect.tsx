import { MultiSelect, MultiSelectProps } from '@mantine/core';
import { useField } from 'formik';
import { memo, useCallback, useMemo } from 'react';

export type FMultiSelectProps = Omit<MultiSelectProps, 'value'> & {
  name: string;
};

export const FMultiSelect = memo(({ name, onChange, ...rest }: FMultiSelectProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (value: string[]) => {
      helpers.setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  return <MultiSelect {...rest} value={field.value} onChange={handleChange} error={error} />;
});
