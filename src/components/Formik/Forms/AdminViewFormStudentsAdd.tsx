import React from "react";
import {Form, Formik, FormikHelpers} from "formik";
import {Input} from "../Input/Input";
import {Button} from "../../Button/Button";
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
                <Input label={'Importuj listę kursantów'} name={'studentsFile'} type={'file'} placeholder={''}/>
                <Button endpoint={'#'} text={'wyślij'}/>
                <button onClick={props.handleModalExit} className={'btn modal'}>zamknij</button>
            </Form>
        </Formik>
    )
}