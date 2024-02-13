import { NumberInput, NumberInputProps } from '@mantine/core';
import { useField } from 'formik';
import { memo, useCallback, useMemo } from 'react';

export type FNumberInputProps = Omit<NumberInputProps, 'value'> & {
  name: string;
};

export const FNumberInput = memo(({ name, onChange, ...rest }: FNumberInputProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (value: string | number) => {
      helpers.setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  return <NumberInput {...rest} value={field.value} onChange={handleChange} error={error} />;
});
