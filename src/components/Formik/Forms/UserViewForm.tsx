import React,{useState} from "react";
import {Form,Formik,FormikHelpers, validateYupSchema} from "formik";
import * as Yup from "yup";
import {OneStudentResponse, ContractType, expectedTypeWorkEntity} from 'types'

import staticText from "../../../languages/en.pl";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {UserPersonalDataInputs} from "../../UserPersonalDataInputs/UserPersonalDataInputs";
import {UserEmploymentDataInputs} from "../../UserEmploymentDataInputs/UserEmploymentDataInputs";
import {UserAboutMeInputs} from "../../UserAboutMeInputs/UserAboutMeInputs";
import {UserExperienceInputs} from "../../UserExperienceInputs/UserExperienceInputs";
import {expectedContractTypesValues,expectedTypeWorkValues, expectedTypeWorkValuesNum, expectedContractTypesValuesNum} from "../../../utils/enumKeys/enumKeys";
import {useSendStudentDataMutation} from "../../../api/updateStudentDataApiSlice";


export interface userFullData{
    firstName:string;
    lastName:string;
    email:string;
    tel:string;
    githubUsername:string;
    // portfolioUrls:string;
    // projectUrls:string;
    bio:string;
    expectedContractType: ContractType,
    expectedTypeWork: expectedTypeWorkEntity,
    targetWorkCity:string;
    expectedSalary: number;
    // canTakeApprenticeship: boolean;
    monthsOfCommercialExp: number;
    // education: string;
    workExperience: string;
    courses:string;
}

interface Props {
    userData:OneStudentResponse
}

export const UserViewForm = (props:Props) => {
    const [sendStudentData,{isLoading}]=useSendStudentDataMutation()
    const [userFEData, setUserFEData] = useState<userFullData>({
        ...props.userData,
        // portfolioUrls:props.userData.portfolioUrls.reduce((prev,curr) => prev + curr + "\n" ,""),
        // projectUrls:props.userData.projectUrls.reduce((prev,curr) => prev + curr + "\n" ,""),
        // expectedContractType:expectedContractTypesValues[props.userData.expectedContractType],
        // expectedTypeWork:expectedTypeWorkValues[props.userData.expectedTypeWork],
        // canTakeApprenticeship: !!props.userData.canTakeApprenticeship
    })
    
    return(
        <>
            <Formik
                initialValues={{
                    ...userFEData
                }}
                validationSchema={Yup.object({
                    email:Yup.string()
                        .required("Pole wymagane")
                        .email(),
                    firstName:Yup.string()
                        .required("Pole wymagane"),
                    lastName: Yup.string()
                        .required("Pole wymagane"),
                    githubUsername: Yup.string()
                        .required("Pole wymagane"),
                    tel:Yup.string(),
                    portfolioUrls:Yup.array()
                        .notRequired()
                        .ensure()
                        .default([]),
                    projectUrls:Yup.array()
                        .notRequired()
                        .ensure()
                        .default([]),
                        // .required("Pole wymagane"),
                    bio:Yup.string(),
                    expectedTypeWork: Yup
                        .mixed<expectedTypeWorkEntity>()
                        .oneOf(expectedTypeWorkValuesNum, "Niepoprawna wartość")
                        .transform(v => Number(v))
                        .required("Pole wymagane"),
                    targetWorkCity:Yup.string(),
                    expectedContractType: Yup
                        .mixed<ContractType>()
                        .oneOf(expectedContractTypesValuesNum)
                        .transform(v => Number(v))
                        .required(),
                    expectedSalary:Yup.string(),
                    canTakeApprenticeship: Yup.boolean(),
                    monthsOfCommercialExp: Yup.number()
                        .required("Pole wymagane"),
                    education: Yup.string(),
                    workExperience: Yup.string(),
                    courses: Yup.string(),
                })}
                onSubmit={
                    async (
                        values:userFullData,
                        {setSubmitting}:FormikHelpers<userFullData>
                    ) => {
                        const response = await sendStudentData(values)
                        console.log(response)

                        // console.log(values);
                        //Github account validation, in future result should be displayed in toast
                        // const res = await fetch(`https://api.github.com/users/${values.githubUsername}`);
                        // if(res.status === 200){
                        //     console.log("Istnieje")
                        // } else if (res.status === 404) {
                        //     console.log("Nie istnieje")
                        // } else {
                        //     console.log("Błąd inny")
                        // }
                        setSubmitting(false);
                    }
                }
            >
            <Form>
                <div className="user-page__inputs">
                    <UserPersonalDataInputs/>
                    <UserEmploymentDataInputs/>
                    <UserAboutMeInputs/>
                    <UserExperienceInputs/>
                </div>
                <div className="user-page__submit-box">
                    <SubmitBtn text={staticText.userPage.submitButton.text} classType={"user-submit-btn"}/>
                </div>
            </Form>
            </Formik>
        </>


    )
}