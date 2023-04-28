import React from "react";
import {useField} from "formik";

interface Props {
    classType:string;
    name:string;
    label:string;
}

export const Checkbox = ({classType,name,label}:Props) =>{
    const [field,meta] = useField({
        name,
        type:"checkbox"
    })

    return(
        <div className={`${classType}__checkbox-box`}>
            <label htmlFor={name}>{label}</label>
            <input type="checkbox" className={name} id={name} {...field} {...{classType,name,label}}/>
            {
                meta.touched && meta.error ?
                    <div className="error">{meta.error}</div>
                    : null
            }
        </div>
    )

}