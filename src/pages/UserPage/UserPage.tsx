import React, {useEffect, useState} from "react";

import "./_user_page.scss"
import {Logo} from "../../components/Logo/Logo";
import staticText from "../../languages/en.pl";
import {UserViewForm} from "../../components/Formik/Forms/UserViewForm";
import {choiceYesNO, ContractType, expectedTypeWorkEntity, OneStudentResponse} from "types";
import {useLogoutMutation} from "../../api/authApiSlice";
import {useDispatch, useSelector} from "react-redux";
import {logOut, selectCurrentUser} from "../../store/auth/authSlice";
import {useNavigate} from "react-router";
import {useGetStudentMutation} from "../../api/getOneStudentApi";

// const userMockupData: OneStudentResponse = {
//     firstName: "Katarzyna",
//     lastName: "Testowana",
//     email: "xyz@testowe.pl",
//     tel: "5572813",
//     githubUsername: "ktoś",
//     portfolioUrls: ["pierwszy link", "drugi link"],
//     projectUrls: ["pierwszy link", "drugi link", "trzeci link", "czwarty link"],
//     bio: "sialsadlasldaslasldals",
//     expectedContractType: ContractType.B2B_POSSIBLE,
//     // @ts-ignore
//     expectedTypeWork: expectedTypeWorkEntity.ONLY_REMOTELY,
//     targetWorkCity: "Rzeszów",
//     expectedSalary: 12000,
//     canTakeApprenticeship: choiceYesNO.YES,
//     monthsOfCommercialExp: 5,
//     education: "Bardzo długa edukacja",
//     workExperience: "brak doświadczenia",
//     courses: "megaK ukończone z wyróżnieniem",
// }

export const UserPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getStudent, {isLoading}] = useGetStudentMutation();
    const onLogOutHandler = async () => {
        try {
            await logout({}).unwrap();
            dispatch(logOut());
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }


    const [data, setData] = useState<OneStudentResponse>({
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        githubUsername: '',
        portfolioUrls: [''],
        projectUrls: [''],
        bio: '',
        expectedContractType: ContractType.NO_PREFERENCE,
        // @ts-ignore
        expectedTypeWork: expectedTypeWorkEntity.IRRELEVANT,
        targetWorkCity: '',
        expectedSalary: 0,
        canTakeApprenticeship: choiceYesNO.NO,
        monthsOfCommercialExp: 0,
        education: '',
        workExperience: '',
        courses: '',
    });
    // Here will be fetch for collecting data from BE. Then it will be passed to UserViewForm.
    useEffect(() => {
        setLoading(true);
        (async ()=>{
            const response = await getStudent('id')
            // @ts-ignore
            const data = response.data as OneStudentResponse
            const userData = {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                tel: data.tel,
                githubUsername: data.githubUsername,
                portfolioUrls: data.portfolioUrls,
                projectUrls: data.projectUrls,
                bio: data.bio,
                expectedContractType: data.expectedContractType,
                // @ts-ignore
                expectedTypeWork: data.expectedTypeWorkEntity,
                targetWorkCity: data.targetWorkCity,
                expectedSalary: data.expectedSalary,
                canTakeApprenticeship: data.canTakeApprenticeship,
                monthsOfCommercialExp: data.monthsOfCommercialExp,
                education: data.education,
                workExperience: data.workExperience,
                courses: data.courses,
            }
            setData(userData);
            setLoading(false);
        })()


    }, [])

    return (
        <>
            <div className='user-page'>
                <div className='user-page__header'>
                    <Logo classType='logo'/>
                    <h1>{staticText.userPage.header.title}</h1>
                    <button className='btn' onClick={onLogOutHandler}>{staticText.navigation.logout}</button>
                </div>
                <div className="user-page__container">
                    {loading ? null : <UserViewForm userData={data}/>}
                </div>
            </div>
        </>
    )
}