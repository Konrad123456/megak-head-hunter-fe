export const displayExpectedTypeOfWork = (num: number) => {
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