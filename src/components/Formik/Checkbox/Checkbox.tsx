import React from 'react';
import { Field, useField } from 'formik';
import { choiceYesNO } from 'types';

interface Props {
  classType: string;
  name: string;
  label: string;
}

export const Checkbox = ({ classType, name, label }: Props) => {
  const [field, meta] = useField({
    name,
  });

  return (
    <div className={`${classType}__checkbox-box`}>
      <label>{label}</label>
      <div style={{ display: 'flex' }}>
        <Field name={'canTakeApprenticeship'}>
          {(props: { field: any }) => {
            const { field } = props;
            return (
              <>
                <label>
                  Nie
                  <input
                    type='radio'
                    {...field}
                    id={`canTakeApprenticeship_0`}
                    value={choiceYesNO.NO}
                    checked={field.value == `${choiceYesNO.NO}`}
                  />
                </label>
                <label>
                  Tak
                  <input
                    type='radio'
                    {...field}
                    id={`canTakeApprenticeship_1`}
                    value={choiceYesNO.YES}
                    checked={field.value == `${choiceYesNO.YES}`}
                  />
                </label>
              </>
            );
          }}
        </Field>
      </div>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};
