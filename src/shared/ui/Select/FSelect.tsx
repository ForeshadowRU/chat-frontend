import { Loader, Select, SelectProps } from '@mantine/core';
import { useField } from 'formik';
import { memo, useCallback, useMemo } from 'react';
import { TOptionItem } from '../Checkbox/types';

export type FSelectProps = Omit<SelectProps, 'value' | 'data' | 'onChange'> & {
  name: string;
  option: TOptionItem[];
  onChange?: (id?: number) => void;
  loading?: boolean;
};

export const FSelect = memo(({ name, onChange, option, loading, ...rest }: FSelectProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (value: string | null) => {
      const currentId = option.find((x) => x.label === value)?.id;
      helpers.setValue(currentId);
      onChange && onChange(currentId);
    },
    [onChange, option]
  );
  const data: string[] = useMemo(() => option.map((x) => x.label), [option]);
  const value = useMemo(
    () => option.find((x) => x.id === field.value)?.label ?? null,
    [option, field.value]
  );
  const rightSection = useMemo(() => (loading ? <Loader size={15} /> : null), [loading]);

  return (
    <Select
      {...rest}
      data={data}
      value={value}
      onChange={handleChange}
      error={error}
      rightSection={rightSection}
    />
  );
});
