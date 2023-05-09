const HumanResourcesStudentsInformation = (props: any) => {
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

  const displayExpectedTypeOfWork = (num: number) => {
    switch (num) {
      case 1:
        return 'Na miejscu';
      case 2:
        return 'Gotowość do przeprowadzki';
      case 3:
        return 'Wyłącznie zdalnie';
      case 4:
        return 'Hybrydowo';
      default:
        return 'Bez znaczenia';
    }
  };

  const displayContractType = (num: number) => {
    switch (num) {
      case 1:
        return 'Tylko UoP';
      case 2:
        return 'Możliwe B2B';
      case 3:
        return 'Możliwe UZ/UoD';
      default:
        return 'Brak preferencji';
    }
  };

  const displayCanTakeApprenticeship = (num: number) => {
    switch (num) {
      case 1:
        return 'TAK';
      default:
        return 'NIE';
    }
  };

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
