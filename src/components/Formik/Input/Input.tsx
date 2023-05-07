import { useField } from 'formik';
import React from 'react';
import '../Input/input.scss';

interface Props {
  classType: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const Input = ({ classType, label, name, type, placeholder }: Props) => {
  const [field, meta] = useField({
    name,
    type,
  });
  return (
    <div className={`${classType}__input-box`}>
      <label htmlFor={name}>{label}</label>
      <input
        className={name}
        id={name}
        {...field}
        {...{ label, name, type, placeholder }}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
