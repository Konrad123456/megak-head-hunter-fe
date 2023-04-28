import React from "react";
import {Input} from "../Formik/Input/Input";
import staticText from "../../languages/en.pl";
import {Select} from "../Formik/Select/Select";
import {Checkbox} from "../Formik/Checkbox/Checkbox";

const userPageText = staticText.userPage;

export const UserEmploymentDataInputs = () => (
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
)
