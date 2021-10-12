import {combineReducers} from 'redux';
import caseReducer from "./case";
import auth from "./auth";
import stripe from "./stripe";
import admin from "./admin";

const rootReducer = combineReducers({
  auth,
  admin,
  stripe,
  caseReducer
});

export default rootReducer;