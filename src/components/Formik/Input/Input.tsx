import { useField } from 'formik';
import React, { ReactElement } from 'react';
import '../Input/input.scss';

interface Props {
  classType: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  children?: ReactElement[] | null;
}

export const Input = ({
  classType,
  label,
  name,
  type,
  placeholder,
  disabled = false,
  children,
}: Props) => {
  const [field, meta] = useField({
    name,
    type,
  });
  return (
    <div className={`${classType}__input-box`}>
      <label htmlFor={name}>{label}</label>
      <div className={`${classType}__container`}>
        <input
          className={name}
          id={name}
          {...field}
          {...{ label, name, type, placeholder }}
          disabled={disabled}
        />
        {children ? children : null}
      </div>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
