import React from "react";
import {Input} from "../Formik/Input/Input";
import staticText from "../../languages/en.pl";

const userPageText = staticText.userPage

export const UserPersonalDataInputs = () => (
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
            disabled={true}
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
)