import {
  MonthPickerInput,
  MonthPickerInputProps,
  DateValue,
  DatesRangeValue,
} from '@mantine/dates';
import { useField } from 'formik';
import dayjs from 'dayjs';
import { memo, useCallback, useMemo } from 'react';

export type FMonthInputProps = Omit<MonthPickerInputProps, 'value' | 'onChange'> & {
  name: string;
  onChange?: (value: DateValue | DatesRangeValue | Date[]) => void;
};

export const FMonthInput = memo(({ name, onChange, ...rest }: FMonthInputProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (value: DateValue | DatesRangeValue | Date[]) => {
      helpers.setValue(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  const value = useMemo(() => dayjs(field.value).toDate(), [field.value]);

  return <MonthPickerInput {...rest} value={value} onChange={handleChange} error={error} />;
});
