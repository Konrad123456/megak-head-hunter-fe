import React from 'react';

import './_user_page.scss';
import { Logo } from '../../components/Logo/Logo';
import staticText from '../../languages/en.pl';
import {useLogoutMutation} from "../../api/authApiSlice";
import {useDispatch} from "react-redux";
import {logOut} from "../../store/auth/authSlice";
import {useNavigate} from "react-router";

const userPageText = staticText.userPage;

export const UserPage = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogOutHandler = async () => {
    try {
      await logout({}).unwrap();
      dispatch(logOut());
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }

  return <>
    <div className='user-page'>
      <div className='user-page__header'>
        <Logo classType='logo' />
        <h1>{userPageText.header.title}</h1>
        <button className='btn' onClick={onLogOutHandler}>{staticText.navigation.logout}</button>
      </div>
      <div className='user-page__container'>
        <div className='user-page__inputs'>
          <div className='user-page__col1'>
            <h2>{userPageText.columnTitle.personalData}</h2>
            <div className='user-page__input-box'>
              <label htmlFor='firstName'>
                {userPageText.input.firstName.label}
              </label>
              <input
                id='firstName'
                type='text'
                placeholder={userPageText.input.firstName.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='lastName'>
                {userPageText.input.lastName.label}
              </label>
              <input
                id='lastName'
                type='text'
                placeholder={userPageText.input.lastName.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='email'>{userPageText.input.email.label}</label>
              <input
                id='email'
                type='email'
                placeholder={userPageText.input.email.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='tel'>{userPageText.input.tel.label}</label>
              <input
                id='tel'
                type='text'
                placeholder={userPageText.input.tel.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='githubUsername'>
                {userPageText.input.githubUsername.label}
              </label>
              <input
                id='githubUsername'
                type='text'
                placeholder={userPageText.input.githubUsername.placeholder}
              />
            </div>
          </div>
          <div className='user-page__col2'>
            <h2>{userPageText.columnTitle.employmentData}</h2>
            <div className='input-container'>
              <div className='input_col1'>
                <div className='user-page__input-box'>
                  <label htmlFor='targetWorkCity'>
                    {userPageText.input.targetWorkCity.label}
                  </label>
                  <input
                    id='targetWorkCity'
                    type='text'
                    placeholder={userPageText.input.targetWorkCity.placeholder}
                  />
                </div>
                <div className='user-page__input-box'>
                  <label htmlFor='expectedTypeWork'>
                    {userPageText.select.expectedTypeWork.label}
                  </label>
                  <select id='expectedTypeWork'>
                    <option value=''>
                      {userPageText.select.expectedTypeWork.option.main}
                    </option>
                    <option value='onSite'>
                      {userPageText.select.expectedTypeWork.option.onSite}
                    </option>
                    <option value='move'>
                      {userPageText.select.expectedTypeWork.option.move}
                    </option>
                    <option value='remote'>
                      {userPageText.select.expectedTypeWork.option.remote}
                    </option>
                    <option value='partiallyRemote'>
                      {
                        userPageText.select.expectedTypeWork.option
                          .partiallyRemote
                      }
                    </option>
                  </select>
                </div>
                <div className='user-page__input-box'>
                  <label htmlFor='expectedContractType'>
                    {userPageText.select.expectedContractType.label}
                  </label>
                  <select id='expectedContractType'>
                    <option value=''>
                      {userPageText.select.expectedContractType.option.main}
                    </option>
                    <option value='coe'>
                      {userPageText.select.expectedContractType.option.coe}
                    </option>
                    <option value='b2b'>
                      {userPageText.select.expectedContractType.option.b2b}
                    </option>
                    <option value='mandate'>
                      {userPageText.select.expectedContractType.option.mandate}
                    </option>
                  </select>
                </div>
                <div className='user-page__input-box'>
                  <label htmlFor='expectedSalary'>
                    {userPageText.input.expectedSalary.label}
                  </label>
                  <input
                    id='expectedSalary'
                    type='number'
                    placeholder={userPageText.input.expectedSalary.placeholder}
                  />
                </div>
                <div className='user-page__input-box'>
                  <label htmlFor='monthsOfCommercialExp'>
                    {userPageText.input.monthsOfCommercialExp.label}
                  </label>
                  <input
                    id='monthsOfCommercialExp'
                    type='number'
                    placeholder={
                      userPageText.input.monthsOfCommercialExp.placeholder
                    }
                  />
                </div>
              </div>
              <div className='input_col2'>
                <div className='user-page__input-box checkbox'>
                  <label htmlFor='canTakeApprenticeship'>
                    {userPageText.checkbox.canTakeApprenticeship}
                  </label>
                  <input id='canTakeApprenticeship' type='checkbox' />
                </div>
              </div>
            </div>
          </div>
          <div className='user-page__col3'>
            <h2>{userPageText.columnTitle.aboutMe}</h2>
            <div className='user-page__input-box'>
              <label htmlFor='bio'>{userPageText.textarea.bio.label}</label>
              <textarea
                id='bio'
                rows={4}
                placeholder={userPageText.textarea.bio.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='portfolioUrls'>
                {userPageText.textarea.portfolioUrls.label}
              </label>
              <textarea
                id='portfolioUrls'
                rows={4}
                placeholder={userPageText.textarea.portfolioUrls.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='projectUrls'>
                {userPageText.textarea.projectUrls.label}
              </label>
              <textarea
                id='projectUrls'
                rows={4}
                placeholder={userPageText.textarea.projectUrls.placeholder}
              />
            </div>
          </div>
          <div className='user-page__col4'>
            <h2>{userPageText.columnTitle.experience}</h2>
            <div className='user-page__input-box'>
              <label htmlFor='education'>
                {userPageText.textarea.education.label}
              </label>
              <textarea
                id='education'
                rows={4}
                placeholder={userPageText.textarea.education.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='workExperience'>
                {userPageText.textarea.workExperience.label}
              </label>
              <textarea
                id='workExperience'
                rows={4}
                placeholder={userPageText.textarea.workExperience.placeholder}
              />
            </div>
            <div className='user-page__input-box'>
              <label htmlFor='courses'>
                {userPageText.textarea.courses.label}
              </label>
              <textarea
                id='courses'
                rows={4}
                placeholder={userPageText.textarea.courses.placeholder}
              />
            </div>
          </div>
        </div>
        <div className='user-page__submit-box'>
          <button className='btn user-submit-btn'>
            {userPageText.submitButton.text}
          </button>
        </div>
      </div>
    </div>
  </>
};
