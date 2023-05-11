import { displayCanTakeApprenticeship } from '../../../utils/display/displayCanTakeApprenticeship';
import { displayContractType } from '../../../utils/display/displayContractType';
import { displayExpectedTypeOfWork } from '../../../utils/display/displayExpectedTypeOfWork';

interface Props {
  courseCompletion:number;
  courseEngagment:number;
  projectDegree:number;
  teamProjectDegree:number;
  expectedTypeWork:number;
  targetWorkCity:string;
  expectedContractType:number;
  expectedSalary:number;
  canTakeApprenticeship:number;
  monthsOfCommercialExp:number;
}

const HumanResourcesStudentsInformation = (props:Props) => {
  const {
    courseCompletion,
    courseEngagment,
    projectDegree,
    teamProjectDegree,
    expectedTypeWork,
    targetWorkCity,
    expectedContractType,
    expectedSalary,
    canTakeApprenticeship,
    monthsOfCommercialExp,
  } = props;

  return (
    <div className='human-resources-students-information'>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Ocena przejścia kursu
        </p>
        <p className='human-resources-students-information__text'>
          {courseCompletion}
          <span className='human-resources-students-information__span'>/5</span>
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Ocena aktywności i zaangażowania na kursie
        </p>
        <p className='human-resources-students-information__text'>
          {courseEngagment}
          <span className='human-resources-students-information__span'>/5</span>
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Ocena kodu w projekcie własnym
        </p>
        <p className='human-resources-students-information__text'>
          {projectDegree}
          <span className='human-resources-students-information__span'>/5</span>
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Ocena pracy w zespole w Scrum
        </p>
        <p className='human-resources-students-information__text'>
          {teamProjectDegree}
          <span className='human-resources-students-information__span'>/5</span>
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Preferowane miejsce pracy
        </p>
        <p className='human-resources-students-information__text'>
          {displayExpectedTypeOfWork(expectedTypeWork)}
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Docelowe miasto, gdzie chce pracować kandydat
        </p>
        <p className='human-resources-students-information__text'>
          {targetWorkCity}
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Oczekiwany typ kontaktu
        </p>
        <p className='human-resources-students-information__text'>
          {displayContractType(expectedContractType)}
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Oczekiwane wynagrodzenie miesięczne netto
        </p>
        <p className='human-resources-students-information__text'>
          {expectedSalary} zł
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Zgoda na odbycie bezpłatnych praktyk/stażu na początek
        </p>
        <p className='human-resources-students-information__text'>
          {displayCanTakeApprenticeship(canTakeApprenticeship)}
        </p>
      </div>
      <div className='human-resources-students-information__box'>
        <p className='human-resources-students-information__title'>
          Komercyjne doświadczenie w programowaniu
        </p>
        <p className='human-resources-students-information__text'>
          {monthsOfCommercialExp} miesięcy
        </p>
      </div>
    </div>
  );
};

export default HumanResourcesStudentsInformation;
