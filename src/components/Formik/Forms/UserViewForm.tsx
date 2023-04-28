import React,{useState} from "react";
import {Form,Formik,FormikHelpers} from "formik";
import * as Yup from "yup";
import {ContractType,expectedTypeWorkEntity,OneStudentResponse} from 'types'

import {Input} from "../Input/Input";
import staticText from "../../../languages/en.pl";
import {Select} from "../Select/Select";
import {Checkbox} from "../Checkbox/Checkbox";
import {Textarea} from "../Textarea/Textarea";
import {SubmitBtn} from "../../common/SubmitBtn/SubmitBtn";

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
                    <div className="user-page__col1">
                        <h2>{userPageText.columnTitle.personalData}</h2>
                        <Input
                            classType={"user-page"}
                            label={userPageText.input.firstName.label}
                            name={"firstName"} type={"text"}
                            placeholder={userPageText.input.firstName.placeholder}
                        />
                        <Input
                            classType={"user-page"}
                            label={userPageText.input.lastName.label}
                            name={"lastName"} type={"text"}
                            placeholder={userPageText.input.lastName.placeholder}
                        />
                        <Input
                            classType={"user-page"}
                            label={userPageText.input.email.label}
                            name={"email"} type={"email"}
                            placeholder={userPageText.input.email.placeholder}
                        />
                        <Input
                            classType={"user-page"}
                            label={userPageText.input.tel.label}
                            name={"tel"} type={"text"}
                            placeholder={userPageText.input.tel.placeholder}
                        />
                        <Input
                            classType={"user-page"}
                            label={userPageText.input.githubUsername.label}
                            name={"githubUsername"}
                            type={"text"}
                            placeholder={userPageText.input.githubUsername.placeholder}
                        />
                    </div>
                    <div className="user-page__col2">
                        <h2>{userPageText.columnTitle.employmentData}</h2>
                        <div className="input-container">
                            <div className="input_col1">
                                <Input
                                    classType={"user-page"}
                                    label={userPageText.input.targetWorkCity.label}
                                    name={"targetWorkCity"}
                                    type={"text"}
                                    placeholder={userPageText.input.targetWorkCity.placeholder}
                                />
                                <Select
                                    classType={"user-page"}
                                    label={userPageText.select.expectedTypeWork.label}
                                    name={"expectedTypeWork"}
                                >
                                    <option value="IRRELEVANT">{userPageText.select.expectedTypeWork.option.main}</option>
                                    <option value="ATLOCATION">{userPageText.select.expectedTypeWork.option.onSite}</option>
                                    <option value="READY_TO_CARRYOUT">{userPageText.select.expectedTypeWork.option.move}</option>
                                    <option value="ONLY_REMOTELY">{userPageText.select.expectedTypeWork.option.remote}</option>
                                    <option value="HYBRID">{userPageText.select.expectedTypeWork.option.partiallyRemote}</option>
                                </Select>
                                <Select
                                    classType={"user-page"}
                                    label={userPageText.select.expectedContractType.label}
                                    name={"expectedContractType"}
                                >
                                    <option value="NO_PREFERENCE">{userPageText.select.expectedContractType.option.main}</option>
                                    <option value="UOP_ONLY">{userPageText.select.expectedContractType.option.coe}</option>
                                    <option value="B2B_POSSIBLE">{userPageText.select.expectedContractType.option.b2b}</option>
                                    <option value="UZ_UOD_POSSIBLE">{userPageText.select.expectedContractType.option.mandate}</option>
                                </Select>
                                <Input
                                    classType={"user-page"}
                                    label={userPageText.input.expectedSalary.label}
                                    name={"expectedSalary"}
                                    type={"number"}
                                    placeholder={userPageText.input.expectedSalary.placeholder}
                                />
                                <Input
                                    classType={"user-page"}
                                    label={userPageText.input.monthsOfCommercialExp.label}
                                    name={"monthsOfCommercialExp"}
                                    type={"number"}
                                    placeholder={userPageText.input.monthsOfCommercialExp.placeholder}
                                />
                            </div>
                            <div className="input_col2">
                                <Checkbox classType={"user-page"} name={"canTakeApprenticeship"} label={userPageText.checkbox.canTakeApprenticeship}/>
                            </div>
                        </div>
                    </div>
                    <div className="user-page__col3">
                        <h2>{userPageText.columnTitle.aboutMe}</h2>
                        <Textarea classType={"user-page"} label={userPageText.textarea.bio.label} name={"bio"} rows={4} placeholder={userPageText.textarea.bio.placeholder}/>
                        <Textarea classType={"user-page"} label={userPageText.textarea.portfolioUrls.label} name={"portfolioUrls"} rows={4} placeholder={userPageText.textarea.portfolioUrls.placeholder}/>
                        <Textarea classType={"user-page"} label={userPageText.textarea.projectUrls.label} name={"projectUrls"} rows={4} placeholder={userPageText.textarea.projectUrls.placeholder}/>
                    </div>
                    <div className="user-page__col4">
                        <h2>{userPageText.columnTitle.experience}</h2>
                        <Textarea classType={"user-page"} label={userPageText.textarea.education.label} name={"education"} rows={4} placeholder={userPageText.textarea.education.placeholder}/>
                        <Textarea classType={"user-page"} label={userPageText.textarea.workExperience.label} name={"workExperience"} rows={4} placeholder={userPageText.textarea.workExperience.placeholder}/>
                        <Textarea classType={"user-page"} label={userPageText.textarea.courses.label} name={"courses"} rows={4} placeholder={userPageText.textarea.courses.placeholder}/>
                    </div>
                </div>
                <div className="user-page__submit-box">
                    <SubmitBtn text={userPageText.submitButton.text} classType={"user-submit-btn"}/>
                </div>

            </Form>
            </Formik>
        </>


    )
}