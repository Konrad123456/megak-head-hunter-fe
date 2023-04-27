import React from "react";
import {Formik,FormikHelpers} from "formik";
import * as Yup from "yup";
import {choiceYesNO, ContractType,expectedTypeWorkEntity, StudentsCVResponse} from 'types'

const expectedContractTypesValues = Object.keys(ContractType).filter(e => e.length > 1 )
const expectedTypeWorkValues = Object.keys(expectedTypeWorkEntity).filter(e => e.length > 1 )

interface userFullData extends StudentsCVResponse{
    firstName:string;
    lastName:string;
    email:string;
    tel:string;
    githubUsername:string;
    portfolioUrls:string[];
    projectUrls:string[];
    bio:string;
    expectedContractType: ContractType
    expectedTypeWork: expectedTypeWorkEntity
    targetWorkCity:string;
    expectedSalary: number;
    canTakeApprenticeship: choiceYesNO;
    monthsOfCommercialExp: number;
    education: string;
    workExperience: string;
    courses:string;
}

interface Props {
    userData:userFullData
}

export const UserViewForm = (props:Props) => {


    return(
        <>
            <Formik
                initialValues={{
                    ...props.userData
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
                        .required("Pole wymagane")
                        .test(
                            "APi check",
                            "Taki login nie istnieje",
                            (value) => {
                                let check;
                                (async () => {
                                    const res = await fetch(`https://api.github.com/users/${value}`);
                                    const data = await res.json();
                                    if(data.id){
                                        return check = true;
                                    } else {
                                        return check = false;
                                    }
                                })()

                                return check
                            }
                        ),
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

            </Formik>
        </>


    )
}