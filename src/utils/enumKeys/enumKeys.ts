import { ContractType, expectedTypeWorkEntity } from "types"

export const expectedContractTypesValues = Object.keys(ContractType).filter(e => e.length > 1 )
export const expectedTypeWorkValues = Object.keys(expectedTypeWorkEntity).filter(e => e.length > 1 )