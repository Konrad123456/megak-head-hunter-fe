import React from "react";
import staticText from "../../languages/en.pl";
import {Textarea} from "../Formik/Textarea/Textarea";

const userPageText = staticText.userPage;

export const UserAboutMeInputs = () => (
    <div className="user-page__col3">
        <h2>{userPageText.columnTitle.aboutMe}</h2>
        <Textarea classType={"user-page"} label={userPageText.textarea.bio.label} name={"bio"} rows={4} placeholder={userPageText.textarea.bio.placeholder}/>
        <Textarea classType={"user-page"} label={userPageText.textarea.portfolioUrls.label} name={"portfolioUrls"} rows={4} placeholder={userPageText.textarea.portfolioUrls.placeholder}/>
        <Textarea classType={"user-page"} label={userPageText.textarea.projectUrls.label} name={"projectUrls"} rows={4} placeholder={userPageText.textarea.projectUrls.placeholder}/>
    </div>
)