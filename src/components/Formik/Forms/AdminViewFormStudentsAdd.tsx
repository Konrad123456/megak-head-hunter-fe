import React from "react";
import {Form, Formik, FormikHelpers, useField} from "formik";
import {Input} from "../Input/Input";
import {Button} from "../../Button/Button";
import * as Yup from "yup";

interface Values {
    studentsFile: null;

}

interface Props {
    handleModalExit: () => void;
}



export const AdminViewFormStudentsAdd = (props: Props) => {

    return (
        <Formik
            initialValues={{
                studentsFile: null,
            }}
            validationSchema={Yup.object({
                studentsFile:Yup.mixed().required('Musisz dodać plik')
            })
           }


            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    console.log(typeof values.studentsFile)
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >
            <Form className={'admin-view__form'}>
                {/*<Input label={'Importuj listę kursantów'} name={'studentsFile'} type={'file'} placeholder={''}/>*/}
                {/*<Button endpoint={'#'} text={'wyślij'}/>*/}
                <input onChange={(event)=>event.currentTarget.files?console.log(event.currentTarget.files[0]):null} type="file" name={'studentsFile'}/>
                <button type={'submit'} className="btn">wyslij</button>
                <button onClick={props.handleModalExit} className={'btn modal'}>zamknij</button>
            </Form>
        </Formik>
    )}
