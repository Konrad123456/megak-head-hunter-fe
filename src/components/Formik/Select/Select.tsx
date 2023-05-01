import React from "react";
import {useField} from "formik";



interface Props {
    classType:string;
    label: string;
    name: string;

    [p: string]: any;
}

export const Select = ({classType,label,name,...props}: Props) => {
    const [field, meta] = useField(name);
    return (
        <div className={`${classType}__select-box`}>
            <label htmlFor={name}>{label}</label>
            <select id={name} className={name} {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};