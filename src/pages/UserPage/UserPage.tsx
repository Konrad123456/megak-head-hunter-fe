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
import {SubmitButton} from "../../components/common/Button/SubmitButton";
import {AdminViewPasswordChangeForm} from "../../components/Formik/Forms/AdminViewPasswordChangeForm";

export const UserPage = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [getStudent, {isLoading}] = useGetStudentMutation();
    const [passwordChange,setPasswordChange]=useState(false);
    const onLogOutHandler = async () => {
        try {
            await logout({}).unwrap();
            dispatch(logOut());
            navigate('/');
        } catch (e) {
            console.log(e);
        }
    }

    const handleChangePassword = ()=>{
        setPasswordChange(prev=>!prev);
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
            // @ts-ignore
            const userData = response.data?{
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                tel: data.tel,
                githubUsername: data.githubUsername,
                portfolioUrls: data.portfolioUrls?data.portfolioUrls:[''],
                projectUrls: data.projectUrls?data.projectUrls:[''],
                bio: data.bio,
                expectedContractType: data.expectedContractType,
                // @ts-ignore
                expectedTypeWork: data.expectedTypeWork,
                targetWorkCity: data.targetWorkCity,
                expectedSalary: data.expectedSalary,
                canTakeApprenticeship: data.canTakeApprenticeship,
                monthsOfCommercialExp: data.monthsOfCommercialExp,
                education: data.education,
                workExperience: data.workExperience,
                courses: data.courses,
            }:{
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
                <SubmitButton text={'zmień hasło'} handleClick={handleChangePassword} myStyles={{
                    display:'block',
                    margin:'0 auto 30px',
                    width:'60%',
                    backgroundColor: '#e02735',
                    textDecoration: 'none',
                    color:'#f7f7f7',
                    textAlign:'center',
                }} />
                {passwordChange&&<AdminViewPasswordChangeForm handleModalExit={handleChangePassword}/>}
                <div className="user-page__container">
                    {loading ? null : <UserViewForm userData={data}/>}
                </div>
            </div>
        </>
    )
}