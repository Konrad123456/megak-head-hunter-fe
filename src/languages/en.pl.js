const staticText = {
  navigation: {
    account: 'Konto',
    logout: 'Wyloguj',
  },
  loginPage: {
    input: {
      email: 'E-mail',
      password: 'Hasło',
    },
    button: {
      login: 'Zaloguj się',
    },
    text: {
      forgetAccont: 'Zapomniałeś hasła?',
      haveAccount: 'Nie masz konta?',
      register: 'Zarejestruj się',
    },
  },
  userPage:{
    header:{
      title: 'Widok użytkownika',
    },
    columnTitle:{
      personalData: 'Dane osobowe:',
      employmentData: 'Dane na temat zatrudnienia:',
      aboutMe: 'O sobie:',
      experience: 'Wykształcenie i doświadczenie:',
    },
    input:{
      firstName:{
        label:'Imię',
        placeholder: 'np. Andrzej',
      },
      lastName:{
        label:'Nazwisko',
        placeholder: 'np. Władysławowicz',
      },
      email:{
        label:'E-mail',
        placeholder: 'np. xyz@gmail.com',
      },
      tel:{
        label:'Nr telefonu',
        placeholder: 'np. 755 455 366',
      },
      githubUsername:{
        label:'GitHub',
        placeholder: 'Nazwa konta github',
      },
      targetWorkCity:{
        label:'Preferowane miasto',
        placeholder: 'np. Kraków',
      },
      expectedSalary:{
        label:'Oczekiwane wynagrodzenie',
        placeholder: 'np. 7600',
      },
      monthsOfCommercialExp:{
        label:'Doświadcznie w miesiącach',
        placeholder: 'np. 18',
      },
    },
    select:{
      expectedTypeWork:{
        label:'Preferowane miejsce pracy',
        option:{
          main:'Bez znaczenia',
          onSite:'Na miejscu',
          move: 'Gotowość do przeprowadzki',
          remote: 'Wyłączenie zdalnie',
          partiallyRemote: 'Hybrydowo'
        }
      },
      expectedContractType:{
        label:'Preferowana forma zatrudnienia',
        option:{
          main:'Brak preferencji',
          coe: 'Umowa o pracę',
          b2b: 'B2B',
          mandate: 'Umowa zlecenie / umowa o dzieło',
        }
      }
    },
    textarea: {
      bio:{
        label:'O mnie',
        placeholder: 'Biografia...'
      },
      portfolioUrls:{
        label:'Linki do portfolio',
        placeholder: 'linki rozdzielane enterem...'
      },
      projectUrls:{
        label:'Linki do projektu',
        placeholder: 'linki rozdzielane enterem...'
      },
      education:{
        label:'Wykształcenie',
        placeholder: 'Opisz swoje wykształcenie'
      },
      workExperience:{
        label:'Doświadczenie zawodowe',
        placeholder: 'Opisz swoje doświadczenie zawodowe...'
      },
      courses:{
        label:'Kursy i certyfikaty',
        placeholder: 'Kursy i certyfikaty...'
      },
    },
    checkbox:{
      canTakeApprenticeship: 'Zgoda na bezpłatne praktyki'
    },
    submitButton:{
      text:'Zapisz',
    },
  },
  mainPages: {
    text: {
      back: 'Wróć',
      aboutMe: 'O mnie',
      scores: 'Oceny',
      courseScore: 'Ocena przejścia kursu',
      activityScore: 'Ocena aktywności i zaangażowania na kursie',
      codeScore: 'Ocena kodu w projekcie własnym',
      teamWorkScore: 'Ocena pracy w zespole w Scrum',
      workExpectations: 'Oczekiwanie w stosunku do zatrudnienia',
      workPlace: 'Preferowane miejsce pracy',
      cityWorkPlace: 'Docelowe miasto, gdzie chce pracować kandydat',
      contractType: 'Oczekiwany typ kontraktu',
      salaryExpectations: 'Oczekiwane wynagrodzenia miesięczne netto',
      apprenticeshipsAgreement:
        'Zgoda na odbycie bezpłatnych praktyk/stażu na początek',
      commercialExperience: 'Komercyjne doświadczenia w programowaniu',
      education: 'Edukacja',
      courses: 'Kursy',
      workExperience: 'Doświadczenia zawodowe',
      portfolio: 'Portfolio',
      scrumProject: 'Projekt w zespole Scrumowym',
      completionProject: 'Projekt na zaliczenie',
      rezervationTo: 'Rezerwacja do',
      numberOfElements: 'Ilość elementów',
      pagesFromTo: ' z ',
      availableTrainee: 'Dostępni kursanci',
      toTalk: 'Do rozmowy',
      filters: 'Filtrowanie',
    },
    button: {
      hired: 'Zatrudniony',
      noInterest: 'Brak zainteresowania',
      interviewReservation: 'Zarezerwuj rozmowę',
      showCv: 'Pokaż CV',
      employed: 'Zatrudniony',
      cancel: 'Anuluj',
      showResults: 'Pokaż wyniki',
      clear: 'Wyczyść wszystkie',
    },
    input: {
      search: 'Szukaj',
      filters: 'Filtrowanie',
    },
  },
};

export default staticText;
