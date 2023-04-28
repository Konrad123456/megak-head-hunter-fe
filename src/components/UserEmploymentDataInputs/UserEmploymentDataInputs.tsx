import React from "react";
import {Input} from "../Formik/Input/Input";
import staticText from "../../languages/en.pl";
import {Select} from "../Formik/Select/Select";
import {Checkbox} from "../Formik/Checkbox/Checkbox";
import { ContractType, expectedTypeWorkEntity } from "types";

const userPageText = staticText.userPage;
const expectedContractTypesValues = Object.keys(ContractType).filter(e => e.length > 1 )
const expectedTypeWorkValues = Object.keys(expectedTypeWorkEntity).filter(e => e.length > 1 )


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
                    {
                        // @ts-ignore
                        expectedTypeWorkValues.map((e,i) => <option key={i} value={e}>{userPageText.select.expectedTypeWork.option[e]}</option>)
                    }
                </Select>
                <Select
                    classType={"user-page"}
                    label={userPageText.select.expectedContractType.label}
                    name={"expectedContractType"}
                >
                    {
                        // @ts-ignore
                        expectedContractTypesValues.map((e,i) => <option key={i} value={e}>{userPageText.select.expectedContractType.option[e]}</option>)
                    }
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
