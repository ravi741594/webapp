import { combineReducers } from "redux";
import interviewReducer from "./interviewReducer";
import employeeReducer from "./employeeReducer"
import userReducer from "./user";
import candidateFormReducer from "./candidateReducer";
import { reducer as formReducer } from "redux-form";

const rootreducer = combineReducers({
  interviewReducer,
  employeeReducer,
  form: formReducer,
  user: userReducer,
  candidateReducer: candidateFormReducer,
})

export default rootreducer;      
