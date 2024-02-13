import { useField } from 'formik';
import { memo, useCallback, useMemo } from 'react';
import { CheckboxGroup, TCheckboxGroup } from './CheckboxGroup';

export type FCheckboxGroupProps = Omit<TCheckboxGroup, 'value'> & {
  name: string;
};

export const FCheckboxGroup = memo(({ name, onChange, ...rest }: FCheckboxGroupProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (value: number[]) => {
      helpers.setValue(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  return <CheckboxGroup {...rest} value={field.value} onChange={handleChange} error={error} />;
});
