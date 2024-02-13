import { Checkbox as MUICheckbox, CheckboxProps as MUICheckboxProps } from '@mantine/core';
import { memo } from 'react';

export type CheckboxProps = Omit<MUICheckboxProps, 'value' | 'onChange'> & {
  onChange: (value: boolean) => void;
};

export const Checkbox = memo(({ onChange, checked, ...rest }: CheckboxProps) => {
  const handleChange = () => {
    onChange(!checked);
  };
  return <MUICheckbox {...rest} checked={checked} onChange={handleChange} />;
});
