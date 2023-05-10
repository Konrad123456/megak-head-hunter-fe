// import { Filter } from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Bio } from '../../components/Bio/Bio';
import { Skills } from '../../components/Skills/Skills';
import { useGetCvMutation } from '../../api/getStudentCVApi';
import { StudentsCVResponse } from 'types';

const defaultCV = {
  id: '',
  email: '',
  courseCompletion: 1,
  courseEngagment: 1,
  projectDegree:1,
  teamProjectDegree: 1,
  tel: '',
  firstName: '',
  lastName: '',
  githubUsername: '',
  portfolioUrls: [],
  projectUrls: [],
  bio: '',
  expectedTypeWork: 0,
  targetWorkCity: '',
  expectedContractType: 0,
  expectedSalary: 0,
  canTakeApprenticeship: 0,
  monthsOfCommercialExp: 0,
  education: '',
  workExperience: '',
  courses: '',
  status: 0,
}

export const PortfolioPage = () => {
  const { state } = useLocation();
  const [userCv, { isLoading, isError }] = useGetCvMutation();
  const [cvData, setCvData] = useState<StudentsCVResponse>(defaultCV);

  useEffect(() => {
    (async () => {
      try {
        const response = await userCv({ id: state.id });

        // @ts-ignore
        if (response.error) {
          // @ts-ignore
          console.log(response.error.data.message);
        }

        // @ts-ignore
        if (response.data) {
          // @ts-ignore
          setCvData(response.data);
        }
      } catch (e: any) {
        console.error('Coś poszło nie tak');
      }
    })();
  }, []);

  return (
    <>
      {/* <Filter /> */}
      <div className='portfolio-page'>
        {isLoading ? (
          <h1>Pobieram...</h1>
        ) : (
          <>
            <Bio {...cvData} />
            <Skills {...cvData}/>
          </>
        )}
      </div>
    </>
  );
};
