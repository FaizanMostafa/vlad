import axios from 'axios';
import {
  SET_IS_CREATING_PAYMENT_INTENT
} from "../constants";
import { showToast } from "../../utils";

const setIsCreatingPaymentIntent = (status) => {
  return {
    type: SET_IS_CREATING_PAYMENT_INTENT,
    payload: status
  };
}

const createPaymentIntent = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    axios.post('', data).then((response)=>{
      onSuccess(response.secret);
    }).catch((error)=>{
      onError();
      dispatch(setIsCreatingPaymentIntent(false));
      showToast(error.message, "error");
    })
  }
)

export {
  createPaymentIntent
};