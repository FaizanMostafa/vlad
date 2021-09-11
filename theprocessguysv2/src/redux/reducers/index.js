import {combineReducers} from 'redux';
import caseReducer from "./case";
import auth from "./auth";
import stripe from "./stripe";

const rootReducer = combineReducers({
  auth,
  stripe,
  caseReducer
});

export default rootReducer;