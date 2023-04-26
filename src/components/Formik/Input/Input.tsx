import {useField} from "formik";
import React from "react";

import "./Input.scss"

interface Props {
    label:string;
    name:string;
    type:string;
    placeholder:string;
}

export const Input = (props: Props) => {
    const [field, meta] = useField({
        name: props.name,
        type: props.type,
    });

    return(
        <div className="input-box">
            <label htmlFor={props.name}>{props.label}</label>
            <input className={props.name} id={props.name} {...field} {...props}/>
            {
                meta.touched && meta.error ?
                    <div className="error">{meta.error}</div>
                    : null
            }
        </div>
    )
}