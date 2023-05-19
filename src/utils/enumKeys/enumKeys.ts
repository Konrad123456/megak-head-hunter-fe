import { ContractType, expectedTypeWorkEntity } from "types"

export const expectedContractTypesValues = Object.keys(ContractType).filter(e => isNaN(Number(e)));
export const expectedContractTypesValuesNum = Object.keys(ContractType).filter(e => !isNaN(Number(e)));

export const expectedTypeWorkValues = Object.keys(expectedTypeWorkEntity).filter(e => isNaN(Number(e)));
export const expectedTypeWorkValuesNum = Object.keys(expectedTypeWorkEntity).filter(e => !isNaN(Number(e)));