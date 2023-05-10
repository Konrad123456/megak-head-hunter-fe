export const displayContractType = (num: number) => {
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