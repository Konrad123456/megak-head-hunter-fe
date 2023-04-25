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
      forgetAccount: 'Zapomniałeś hasła?',
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
  adminPage:{
adminPanel:'panel administratora',
    settings:'ustawienia',
    addHr:'dodaj hr',
    importStudents:'importuj kursantów',
    singleHrForm:'Formularz dodawania pojedyńczego HR',
    importStudentsFromFile:'importuj kursantów z pliku',
    adminSettings:'ustawienia konta administratora',
    close:'zamknij',
    newPassword:'nowe hasło',
    confirmPassword:'powtórz hasło',
    fileIsTooBig:'Plik jest zbyt duży',
    wrongFileType:'Niewłaściwy typ pliku',
    noFileAdded:'Musisz dodać plik',
    fieldRequired:'Pole wymagane',
    repeatPassword:'Powtórz hasło',
    passwordStrengthRequired:'Hasło musi posiadać co najmniej jeden duży znak, jedną liczbę i jeden znak specjalny',
    passwordsMustBeTheSame:'Hasła muszą być takie same',
    nameMustHaveFourChar:'Imię musi mieć minimum 4 znaki',
    companyNameMustHaveFourChar:'Nazwa firmy musi mieć minimum 4 znaki',
    wrongEmail:'niepoprawny adres e-mail',
    mustBeMoreThanZero:'ilość musi być większa niż 0',
    toBigNumber:'zbyt duża ilość',
    fullName:'imię i nazwisko',
    companyName:'nazwa firmy',
    email:'adres email',
    maxReservedStudents:'maksymalna liczba kursantów',

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
      reservationTo: 'Rezerwacja do',
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