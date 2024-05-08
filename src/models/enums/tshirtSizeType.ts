export enum TSHIRT_SIZE_TYPE {
  P = "P",
  M = "M",
  G = "G",
  GG = "GG",
  INFANTIL_P = "Infantil P",
  INFANTIL_M = "Infantil M",
  INFANTIL_G = "Infantil G",
}

export function getUserTypeByValue(value: string): TSHIRT_SIZE_TYPE {
  switch (value) {
    case TSHIRT_SIZE_TYPE.P:
      return TSHIRT_SIZE_TYPE.P
      break;
    case TSHIRT_SIZE_TYPE.M:
      return TSHIRT_SIZE_TYPE.M
      break;
    case TSHIRT_SIZE_TYPE.G:
      return TSHIRT_SIZE_TYPE.G
      break;
    case TSHIRT_SIZE_TYPE.GG:
      return TSHIRT_SIZE_TYPE.GG
      break;
    case TSHIRT_SIZE_TYPE.INFANTIL_P:
      return TSHIRT_SIZE_TYPE.INFANTIL_P
      break;
    case TSHIRT_SIZE_TYPE.INFANTIL_M:
      return TSHIRT_SIZE_TYPE.INFANTIL_M
      break;
    default:
      return TSHIRT_SIZE_TYPE.INFANTIL_G
  }
}