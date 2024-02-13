import { Checkbox as MantineCheckbox, CheckboxProps as MantineCheckboxProps } from '@mantine/core';
import { useField } from 'formik';
import { ChangeEvent, memo, useCallback, useMemo } from 'react';

export type FCheckboxProps = Omit<MantineCheckboxProps, 'value'> & {
  name: string;
  onChange?: (value: boolean) => void;
};

export const FCheckbox = memo(({ name, onChange, ...rest }: FCheckboxProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (newValue: ChangeEvent<HTMLInputElement>) => {
      onChange?.(newValue);
      return helpers.setValue(newValue.target.checked);
    },
    [onChange]
  );

  return <MantineCheckbox {...rest} checked={field.value} onChange={handleChange} error={error} />;
});
