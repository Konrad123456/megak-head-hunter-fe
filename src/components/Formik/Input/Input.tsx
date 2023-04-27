import {useField} from "formik";
import React from "react";
import '../Input/input.scss'


interface Props {
    label:string;
    name:string;
    type:string;
    placeholder:string;
}
export const Input = ({name, type, label,placeholder}: Props) => {
    const [field, meta] = useField({
        name: name,
        type: type,
    });
    return(
        <div className="input-box">
            <label htmlFor={name}>{label}</label>
            <input className={name} id={name} {...field} {...{name, type, label,placeholder}}/>
            {
                meta.touched && meta.error ?
                    <div className="error">{meta.error}</div>
                    : null
            }
        </div>
    )
}