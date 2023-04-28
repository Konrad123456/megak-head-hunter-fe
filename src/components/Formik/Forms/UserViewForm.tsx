import React,{useState} from "react";
import {Form,Formik,FormikHelpers} from "formik";
import * as Yup from "yup";
import {ContractType,expectedTypeWorkEntity,OneStudentResponse} from 'types'

import staticText from "../../../languages/en.pl";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";
import {UserPersonalDataInputs} from "../../UserPersonalDataInputs/UserPersonalDataInputs";
import {UserEmploymentDataInputs} from "../../UserEmploymentDataInputs/UserEmploymentDataInputs";
import {UserAboutMeInputs} from "../../UserAboutMeInputs/UserAboutMeInputs";
import {UserExperienceInputs} from "../../UserExperienceInputs/UserExperienceInputs";

const expectedContractTypesValues = Object.keys(ContractType).filter(e => e.length > 1 )
const expectedTypeWorkValues = Object.keys(expectedTypeWorkEntity).filter(e => e.length > 1 )
const userPageText = staticText.userPage

export interface userFullData{
    firstName:string;
    lastName:string;
    email:string;
    tel:string;
    githubUsername:string;
    portfolioUrls:string;
    projectUrls:string;
    bio:string;
    expectedContractType: string,
    expectedTypeWork: string,
    targetWorkCity:string;
    expectedSalary: number;
    canTakeApprenticeship: boolean;
    monthsOfCommercialExp: number;
    education: string;
    workExperience: string;
    courses:string;
}

interface Props {
    userData:OneStudentResponse
}

export const UserViewForm = (props:Props) => {
    const [userFEData, setUserFEData] = useState<userFullData>({
        ...props.userData,
        portfolioUrls:props.userData.portfolioUrls.reduce((prev,curr) => prev + curr + "\n" ,""),
        projectUrls:props.userData.projectUrls.reduce((prev,curr) => prev + curr + "\n" ,""),
        expectedContractType:expectedContractTypesValues[props.userData.expectedContractType],
        expectedTypeWork:expectedTypeWorkValues[props.userData.expectedTypeWork],
        canTakeApprenticeship: !!props.userData.canTakeApprenticeship
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
                        // Taki test jest ok ale nie tutaj, yup robi to po każdej literce, przy długim loginie ktoś zabije rate-limiter na githubie
                        //  .test(
                        //     "APi check",
                        //     "Taki login nie istnieje",
                        //     (value) => {
                        //
                        //         (async () => {
                        //             const res = await fetch(`https://api.github.com/users/${value}`);
                        //             if(res.status === 200){
                        //                 console.log("jest ok")
                        //                 return true;
                        //             } else {
                        //                 console.log("jest źle")
                        //                 return false;
                        //             }
                        //         })()
                        //
                        //     }
                        // ),
                    tel:Yup.string(),
                    portfolioUrls:Yup.string(),
                    projectUrls:Yup.string()
                        .required("Pole wymagane"),
                    bio:Yup.string(),
                    expectedTypeWork: Yup.string()
                        .required("Pole wymagane")
                        .oneOf(expectedTypeWorkValues, "Niepoprawna wartość"),
                    targetWorkCity:Yup.string(),
                    expectedContractType: Yup.string()
                        .required("Pole wymagane")
                        .oneOf(expectedContractTypesValues),
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
                        console.log(values);
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
                    <SubmitBtn text={userPageText.submitButton.text} classType={"user-submit-btn"}/>
                </div>
            </Form>
            </Formik>
        </>


    )
}