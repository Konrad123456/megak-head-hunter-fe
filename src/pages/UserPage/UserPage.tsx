import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Logo } from '../../components/Logo/Logo';
import staticText from '../../languages/en.pl';
import { UserViewForm } from '../../components/Formik/Forms/UserViewForm';
import {
  choiceYesNO,
  ContractType,
  expectedTypeWorkEntity,
  OneStudentResponse,
} from 'types';
import { useLogoutMutation } from '../../api/authApiSlice';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/auth/authSlice';
import { useGetStudentMutation } from '../../api/getOneStudentApi';
import { AdminViewPasswordChangeForm } from '../../components/Formik/Forms/AdminViewPasswordChangeForm';
import './_user_page.scss';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const UserPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [getStudent, { isLoading }] = useGetStudentMutation();

  const onLogOutHandler = async () => {
    try {
      await logout({}).unwrap();
      dispatch(logOut());
      navigate('/');
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

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
    expectedTypeWork: expectedTypeWorkEntity.IRRELEVANT,
    targetWorkCity: '',
    expectedSalary: 0,
    canTakeApprenticeship: choiceYesNO.NO,
    monthsOfCommercialExp: 0,
    education: '',
    workExperience: '',
    courses: '',
  });

  useEffect(() => {
    setLoading(true);

    (async () => {
      const response = (await getStudent({})) as { data: OneStudentResponse };
      const userData = response.data ?? {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        tel: data.tel,
        githubUsername: data.githubUsername,
        portfolioUrls: data.portfolioUrls ? data.portfolioUrls : [''],
        projectUrls: data.projectUrls ? data.projectUrls : [''],
        bio: data.bio,
        expectedContractType: data.expectedContractType,
        expectedTypeWork: data.expectedTypeWork,
        targetWorkCity: data.targetWorkCity,
        expectedSalary: data.expectedSalary,
        canTakeApprenticeship: data.canTakeApprenticeship,
        monthsOfCommercialExp: data.monthsOfCommercialExp,
        education: data.education,
        workExperience: data.workExperience,
        courses: data.courses,
      };

      setData(userData);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className='user-page'>
        <div className='user-page__header'>
          <Logo classType='logo' />
          <h1>{staticText.userPage.header.title}</h1>
          <div>
            <button className='submit-button user-btn' onClick={handleOpen}>
              {staticText.loginPage.button.changePass}
            </button>
            <button className='submit-button user-btn' onClick={onLogOutHandler}>
              {staticText.navigation.logout}
            </button>
          </div>
        </div>

        <div>
          {isOpen && (
            <AdminViewPasswordChangeForm handleModalExit={handleOpen} />
          )}
        </div>

        <div className='user-page__container'>
          {loading ? null : <UserViewForm userData={data} />}
        </div>
      </div>
      <ToastContainer autoClose={5000} style={{fontSize: '1.6rem'}}/>
    </>
  );
};
