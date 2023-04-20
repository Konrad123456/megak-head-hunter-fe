import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {Input} from "../Input/Input";
interface Values {
    studentsFile: null;

}
interface Props {
    handleModalExit:()=>void;
}

export const AdminViewFormStudentsAdd = (props:Props)=>{


    return (
        <Formik
            initialValues={{
               studentsFile:null,
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form className={'admin-view__form'}>
                <p>importuj listę kursantów</p>
                <Input label={''} name={'studentsFile'} type={'file'} placeholder={''}/>

                <button className={'btn'} type="submit">wyślij</button>
                <button onClick={props.handleModalExit} className={'btn modal'}>zamknij</button>
            </Form>
        </Formik>
    )
}