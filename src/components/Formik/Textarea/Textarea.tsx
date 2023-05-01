import React from "react";

import {useField} from "formik";

interface Props {
    classType:string;
    label: string
    name: string;
    rows: number;
    placeholder: string;
}

export const Textarea = ({classType,label,name,...props}: Props) => {
    const [field, meta] = useField({
        name: name,
    });
    return (
        <div className={`${classType}__textarea-box`}>
            <label htmlFor={name}>{label}</label>
            <textarea className={name} id={name} {...field} {...props}/>
            {
                meta.touched && meta.error ?
                    <div className="error">{meta.error}</div>
                    : null
            }
        </div>
    )
}