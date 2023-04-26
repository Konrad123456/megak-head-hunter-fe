import React from "react";
import {Formik,FormikHelpers} from "formik";
import * as Yup from "yup";

const expectedContractTypesValues = ["" , "coe" , "b2b" , "mandate"]
const expectedTypeWorkValues = ["" , "onSite" , "move" , "remote" , "partiallyRemote"]

interface userFullData{
    firstName:string;
    lastName:string;
    email:string;
    tel:string;
    githubUsername:string;
    portfolioUrls:string;
    projectUrls:string;
    bio:string;
    expectedContractType: "" | "coe" | "b2b" | "mandate"
    expectedTypeWork:"" | "onSite" | "move" | "remote" | "partiallyRemote";
    targetWorkCity:string;
    expectedSalary: number;
    canTakeApprenticeship: boolean;
    monthsOfCommercialExp: number;
    education: string;
    workExperience: string;
    courses:string;
}

interface Props {
    userData:userFullData
}

export const UserViewForm = (props:Props) => (
    <>
        <Formik
            initialValues={{
                ...props.userData
            }}
            validationSchema={Yup.object({
                email:Yup.string()
                    .required("Pole wymagane")
                    .matches(/@/g),
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