import React, {useRef} from "react";
import {Form, Formik, FormikHelpers} from "formik";
import staticText from "../../../languages/en.pl";
import * as Yup from "yup";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {useSendStudentsListMutation} from "../../../api/adminViewApiSlice";

interface Values {
    studentsFile: null;

}

interface Props {
    handleModalExit: () => void;
}

const fileTypes = [
    'application/json',
    'text/csv',
]

const maxFilesize = 2097152;


export const AdminViewFormStudentsAdd = (props: Props) => {
    const fileRef = useRef(null)
    const [sendStudentsList, {isLoading, isError, error}] = useSendStudentsListMutation()
    const formData = new FormData()

    return (
        <Formik
            initialValues={{
                studentsFile: null,
            }}
            validationSchema={Yup.object({
                studentsFile: Yup.mixed().required(staticText.adminPage.noFileAdded)
                    .test("fileFormat",
                        staticText.adminPage.wrongFileType,
                        () => {
                            const filesReference: any = fileRef.current;
                            const fileToCheck = filesReference.files[0];
                            if (fileToCheck) {
                                return fileTypes.includes(fileToCheck.type)
                            } else return true
                        }
                    ).test(
                        "fileSize",
                        staticText.adminPage.fileIsTooBig,
                        () => {
                            const fileList: any = fileRef.current
                            const singleFile = fileList.files[0];
                            if (singleFile) {
                                return singleFile.size <= maxFilesize
                            } else {
                                return true
                            }
                        }
                    )
            })}

            onSubmit={async (
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                // @ts-ignore
                const dataFile = fileRef.current.files[0]
                formData.append('students',dataFile)
                await sendStudentsList(formData).unwrap()
                setTimeout(() => {
                    setSubmitting(false);
                }, 500);
            }}
        >
            {formik => (<Form className={'admin-view__form'}>
                <input type="file"
                       id='studentsFile'
                       name='studentsFile'
                       ref={fileRef}
                       multiple={false}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                />
                {formik.touched.studentsFile && formik.errors.studentsFile ? (
                    <div className={'error'}>{formik.errors.studentsFile}</div>
                ) : null}
                {isLoading && <div className={'error'}>wysyłam...</div>}
                {isError && <div className={'error'}>Oh NO !</div>}
                <SubmitBtn text={staticText.userPage.submitButton.text}/>
                <div onClick={props.handleModalExit} className={'btn modal'}>{staticText.adminPage.close}</div>
            </Form>)}
        </Formik>
    )
}
