import { Rating, RatingProps } from '@mantine/core';
import { useField } from 'formik';
import React, { memo, useCallback, useMemo } from 'react';
import { FError } from '../FError';

export type FRatingProps = Omit<RatingProps, 'value'> & {
  name: string;
};

export const FRating = memo(({ name, onChange, ...rest }: FRatingProps) => {
  const [field, meta, helpers] = useField(name);
  const error = useMemo(
    () => (!!meta.error && !!meta.touched ? meta.error : undefined),
    [meta.error, meta.touched]
  );

  const handleChange = useCallback(
    (e: number) => {
      helpers.setValue(e);
      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <>
      <Rating {...rest} value={field.value} onChange={handleChange} />
      <FError error={error} />
    </>
  );
});
