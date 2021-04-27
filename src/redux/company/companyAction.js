import { SELECT_COMPANY } from "../types";

export const selectCompany = (company) => {
  return {
    type: SELECT_COMPANY,
    data: company,
  };
};
