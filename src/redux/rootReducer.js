import { combineReducers } from "redux";
import { companyReducer } from "./company/companyReducer";
import { dropDownReducer } from "./dropdown/dropDownReducer";

const rootReducer = combineReducers({
  company: companyReducer,
  dropDown: dropDownReducer,
});

export default rootReducer;
