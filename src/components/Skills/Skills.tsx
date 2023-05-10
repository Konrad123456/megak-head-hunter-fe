import React from 'react';
import { PortfolioHeaders } from '../PortfolioHeaders/PortfolioHeaders';
import staticText from '../../languages/en.pl';
import { PortfolioLinks } from '../PortfolioLinks/PortfolioLinks';
import { PortfolioText } from '../PortfolioText/PortfolioText';
import { PortfolioScores } from '../PortfolioScores/PortfolioScores';
import { PortfolioWorkExpectations } from '../PortfolioWorkExpectations/PortfolioWorkExpectations';
import {
  expectedTypeWorkEntity,
  ContractType,
  choiceYesNO,
} from 'types';
import { displayContractType } from '../../utils/display/displayContractType';
import { displayCanTakeApprenticeship } from '../../utils/display/displayCanTakeApprenticeship';
import { displayExpectedTypeOfWork } from '../../utils/display/displayExpectedTypeOfWork';

type Props = {
  courseCompletion: number;
  courseEngagment: number;
  projectDegree: number;
  teamProjectDegree: number;
  portfolioUrls: string[];
  projectUrls: string[];
  expectedTypeWork: expectedTypeWorkEntity;
  targetWorkCity: string;
  expectedContractType: ContractType;
  expectedSalary: number;
  canTakeApprenticeship: choiceYesNO;
  monthsOfCommercialExp: number;
  education: string;
  workExperience: string;
  courses: string;
};

export const Skills = (props: Props) => {
  const PortfolioScoresArr = [
    props.courseCompletion,
    props.courseEngagment,
    props.projectDegree,
    props.teamProjectDegree,
  ] as number[];

  const expectationsArr = [
    displayExpectedTypeOfWork(props.expectedContractType),
    props.targetWorkCity,
    displayContractType(props.expectedContractType),
    `${props.expectedSalary} zł`,
    displayCanTakeApprenticeship(props.canTakeApprenticeship),
    `${props.monthsOfCommercialExp} m.`,
  ];

  return (
    <div className='skills'>
      <PortfolioHeaders text={staticText.mainPages.text.scores} />
      <PortfolioScores stars={PortfolioScoresArr} />

      <PortfolioHeaders text={staticText.mainPages.text.workExpectations} />
      <PortfolioWorkExpectations expectations={expectationsArr} />

      <PortfolioHeaders text={staticText.mainPages.text.education} />
      <PortfolioText text={props.education} />

      <PortfolioHeaders text={staticText.mainPages.text.courses} />
      <PortfolioText text={props.courses} />

      <PortfolioHeaders text={staticText.mainPages.text.workExperience} />
      <PortfolioText text={props.workExperience} />

      <PortfolioHeaders text={staticText.mainPages.text.portfolio} />
      <PortfolioLinks links={props.portfolioUrls} />

      <PortfolioHeaders text={staticText.mainPages.text.scrumProject} />
      <PortfolioLinks links={props.projectUrls} />

      <PortfolioHeaders text={staticText.mainPages.text.completionProject} />
      <PortfolioLinks links={props.projectUrls} />
    </div>
  );
};
