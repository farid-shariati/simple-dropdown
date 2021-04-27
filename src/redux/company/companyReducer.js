import { SELECT_COMPANY } from "../types";

const initialState = {
  selectedCompany: "Select a company",
};

export const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_COMPANY:
      return {
        selectedCompany : action.data
      }
    default:
      return state;
  }
};
