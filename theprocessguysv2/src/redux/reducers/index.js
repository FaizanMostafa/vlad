import {combineReducers} from 'redux';
import caseReducer from "./case";
import auth from "./auth";

const rootReducer = combineReducers({
  auth,
  caseReducer
});

export default rootReducer;