import { IS_DROPDOWN_OPEN } from "../types";

const initialState = {
  isOpen: false,
};

export const dropDownReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_DROPDOWN_OPEN:
      return {
        isOpen :!state.isOpen
      };
    default:
      return state
  }
};
