import { Stack } from '@mantine/core';
import { memo } from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { TOptionItem } from './types';

export type TCheckboxGroup = Omit<CheckboxProps, 'value' | 'onChange'> & {
  options: TOptionItem[];
  value: number[];
  onChange: (ids: number[]) => void;
};

/**
 *
 * @param options : @example [
 *     { value: 1, label: "Омск" },
 *     { value: 2, label: "Киров" },
 *     { value: 3, label: "Москва" },
 * ]
 *
 */
export const CheckboxGroup = memo(({ options, onChange, value, ...rest }: TCheckboxGroup) => {
  const handleChange = (id: number) => {
    const index = value.indexOf(id);
    value.includes(id) ? value.splice(index, 1) : value.push(id);
    onChange(value);
  };
  return (
    <Stack gap={8}>
      {options.map(({ id, label }) => (
        <Checkbox
          {...rest}
          key={id}
          checked={value.includes(id)}
          onChange={() => {
            handleChange(id);
          }}
          label={label}
        />
      ))}
    </Stack>
  );
});
