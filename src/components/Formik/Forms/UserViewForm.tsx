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
                                <div className="user-page__input-box">
                                    <label htmlFor="targetWorkCity">{userPageText.input.targetWorkCity.label}</label>
                                    <input id="targetWorkCity" type="text" placeholder={userPageText.input.targetWorkCity.placeholder}/>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="expectedTypeWork">{userPageText.select.expectedTypeWork.label}</label>
                                    <select id="expectedTypeWork" >
                                        <option value="">{userPageText.select.expectedTypeWork.option.main}</option>
                                        <option value="onSite">{userPageText.select.expectedTypeWork.option.onSite}</option>
                                        <option value="move">{userPageText.select.expectedTypeWork.option.move}</option>
                                        <option value="remote">{userPageText.select.expectedTypeWork.option.remote}</option>
                                        <option value="partiallyRemote">{userPageText.select.expectedTypeWork.option.partiallyRemote}</option>
                                    </select>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="expectedContractType">{userPageText.select.expectedContractType.label}</label>
                                    <select id="expectedContractType" >
                                        <option value="">{userPageText.select.expectedContractType.option.main}</option>
                                        <option value="coe">{userPageText.select.expectedContractType.option.coe}</option>
                                        <option value="b2b">{userPageText.select.expectedContractType.option.b2b}</option>
                                        <option value="mandate">{userPageText.select.expectedContractType.option.mandate}</option>
                                    </select>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="expectedSalary">{userPageText.input.expectedSalary.label}</label>
                                    <input id="expectedSalary" type="number" placeholder={userPageText.input.expectedSalary.placeholder}/>
                                </div>
                                <div className="user-page__input-box">
                                    <label htmlFor="monthsOfCommercialExp">{userPageText.input.monthsOfCommercialExp.label}</label>
                                    <input id="monthsOfCommercialExp" type="number" placeholder={userPageText.input.monthsOfCommercialExp.placeholder}/>
                                </div>
                            </div>
                            <div className="input_col2">
                                <div className="user-page__input-box checkbox">
                                    <label htmlFor="canTakeApprenticeship">{userPageText.checkbox.canTakeApprenticeship}</label>
                                    <input id="canTakeApprenticeship" type="checkbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-page__col3">
                        <h2>{userPageText.columnTitle.aboutMe}</h2>
                        <div className="user-page__input-box">
                            <label htmlFor="bio">{userPageText.textarea.bio.label}</label>
                            <textarea id="bio" rows={4} placeholder={userPageText.textarea.bio.placeholder}/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="portfolioUrls">{userPageText.textarea.portfolioUrls.label}</label>
                            <textarea id="portfolioUrls" rows={4} placeholder={userPageText.textarea.portfolioUrls.placeholder}/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="projectUrls">{userPageText.textarea.projectUrls.label}</label>
                            <textarea id="projectUrls" rows={4} placeholder={userPageText.textarea.projectUrls.placeholder}/>
                        </div>
                    </div>
                    <div className="user-page__col4">
                        <h2>{userPageText.columnTitle.experience}</h2>
                        <div className="user-page__input-box">
                            <label htmlFor="education">{userPageText.textarea.education.label}</label>
                            <textarea id="education" rows={4} placeholder={userPageText.textarea.education.placeholder}/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="workExperience">{userPageText.textarea.workExperience.label}</label>
                            <textarea id="workExperience" rows={4} placeholder={userPageText.textarea.workExperience.placeholder}/>
                        </div>
                        <div className="user-page__input-box">
                            <label htmlFor="courses">{userPageText.textarea.courses.label}</label>
                            <textarea id="courses" rows={4}  placeholder={userPageText.textarea.courses.placeholder}/>
                        </div>
                    </div>

                </div>
                <div className="user-page__submit-box">
                    <button className="btn user-submit-btn">{userPageText.submitButton.text}</button>
                </div>

            </Form>
            </Formik>
        </>


    )
}