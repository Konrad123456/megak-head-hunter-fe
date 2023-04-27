import React,{useState} from "react";
import {Form,Formik,FormikHelpers} from "formik";
import * as Yup from "yup";
import {ContractType,expectedTypeWorkEntity,OneStudentResponse} from 'types'

import {Input} from "../Input/Input";
import staticText from "../../../languages/en.pl";

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
    canTakeApprenticeship: 0 | 1;
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
        portfolioUrls:props.userData.portfolioUrls.reduce((prev,curr) => prev + "\n" + curr,""),
        projectUrls:props.userData.projectUrls.reduce((prev,curr) => prev + "\n" + curr,""),
        expectedContractType:expectedContractTypesValues[props.userData.expectedContractType],
        expectedTypeWork:expectedTypeWorkValues[props.userData.expectedTypeWork],
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
                    canTakeApprenticeship: Yup.number()
                        .oneOf([0,1]),
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
                <div className="user-page__col1">
                    <h2>{userPageText.columnTitle.personalData}</h2>
                        <Input classType={"user-page"} label={userPageText.input.firstName.label} name={"firstName"} type={"text"} placeholder={userPageText.input.firstName.placeholder}/>
                        <Input classType={"user-page"} label={userPageText.input.lastName.label} name={"lastName"} type={"text"} placeholder={userPageText.input.lastName.placeholder}/>

                        <Input classType={"user-page"} label={userPageText.input.email.label} name={"email"} type={"email"} placeholder={userPageText.input.email.placeholder}/>

                        <Input classType={"user-page"} label={userPageText.input.tel.label} name={"tel"} type={"text"} placeholder={userPageText.input.tel.placeholder}/>

                        <Input classType={"user-page"} label={userPageText.input.githubUsername.label} name={"githubUsername"} type={"text"} placeholder={userPageText.input.githubUsername.placeholder}/>

                </div>
            </Form>
            </Formik>
        </>


    )
}