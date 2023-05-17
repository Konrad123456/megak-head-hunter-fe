import React, { useState } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { OneStudentResponse } from 'types';
import staticText from '../../../languages/en.pl';
import { SubmitBtn } from '../../common/SubmitBtn/SubmitBtn';
import { UserPersonalDataInputs } from '../../UserPersonalDataInputs/UserPersonalDataInputs';
import { UserEmploymentDataInputs } from '../../UserEmploymentDataInputs/UserEmploymentDataInputs';
import { UserAboutMeInputs } from '../../UserAboutMeInputs/UserAboutMeInputs';
import { UserExperienceInputs } from '../../UserExperienceInputs/UserExperienceInputs';
import {
  expectedContractTypesValuesNum,
  expectedTypeWorkValuesNum,
} from '../../../utils/enumKeys/enumKeys';
import {
  StudentsDataInterface,
  useSendStudentDataMutation,
} from '../../../api/updateStudentDataApiSlice';
import { toast } from "react-toastify";

interface Props {
  userData: OneStudentResponse;
}

export const UserViewForm = (props: Props) => {
  const [sendStudentData, { isLoading }] = useSendStudentDataMutation();
  const [userFEData, setUserFEData] = useState<OneStudentResponse>({
    ...props.userData,
  });

  return (
    <>
      <Formik
        initialValues={{
          ...userFEData,
        }}
        validationSchema={Yup.object({
          email: Yup.string().required('Pole wymagane').email(),
          firstName: Yup.string().required('Pole wymagane'),
          lastName: Yup.string().required('Pole wymagane'),
          githubUsername: Yup.string().required('Pole wymagane'),
          tel: Yup.string(),
          portfolioUrls: Yup.array().max(5),
          projectUrls: Yup.array().min(1).max(5).required('Pole wymagane'),
          bio: Yup.string(),
          expectedTypeWork: Yup.mixed()
            .oneOf(expectedTypeWorkValuesNum, 'Niepoprawna wartość')
            .required('Pole wymagane'),
          targetWorkCity: Yup.string(),
          expectedContractType: Yup.mixed()
            .oneOf(expectedContractTypesValuesNum, 'Niepoprawna wartość')
            .required(),
          expectedSalary: Yup.string(),
          canTakeApprenticeship: Yup.string(),
          monthsOfCommercialExp: Yup.number().required('Pole wymagane'),
          education: Yup.string(),
          workExperience: Yup.string(),
          courses: Yup.string(),
        })}
        onSubmit={async (
          values: OneStudentResponse,
          { setSubmitting }: FormikHelpers<OneStudentResponse>
        ) => {
          const sendData = {
            ...values,
          } as StudentsDataInterface;

          await sendStudentData(sendData);

          toast.success('Dane zapisane.')

          setSubmitting(false);
        }}
      >
        <Form>
          <div className='user-page__inputs'>
            <UserPersonalDataInputs />
            <UserEmploymentDataInputs />
            <UserAboutMeInputs />
            <UserExperienceInputs />
          </div>
          <div className='user-page__submit-box'>
            <SubmitBtn
              text={staticText.userPage.submitButton.text}
              classType={'user-submit-btn'}
            />
          </div>
        </Form>
      </Formik>
    </>
  );
};
