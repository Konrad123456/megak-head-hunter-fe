import React from "react";
import staticText from "../../languages/en.pl";
import {Textarea} from "../Formik/Textarea/Textarea";

const userPageText = staticText.userPage;

export const UserExperienceInputs = () => (
    <div className="user-page__col4">
        <h2>{userPageText.columnTitle.experience}</h2>
        <Textarea classType={"user-page"} label={userPageText.textarea.education.label} name={"education"} rows={4} placeholder={userPageText.textarea.education.placeholder}/>
        <Textarea classType={"user-page"} label={userPageText.textarea.workExperience.label} name={"workExperience"} rows={4} placeholder={userPageText.textarea.workExperience.placeholder}/>
        <Textarea classType={"user-page"} label={userPageText.textarea.courses.label} name={"courses"} rows={4} placeholder={userPageText.textarea.courses.placeholder}/>
    </div>
)