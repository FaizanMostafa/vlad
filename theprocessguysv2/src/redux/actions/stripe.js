import axios from 'axios';
import {db} from "../../firebase";
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
    dispatch(setIsCreatingPaymentIntent(true));
    axios.post('https://us-central1-the-process-guys.cloudfunctions.net/createStripePayment', data).then(async (response)=>{
      if(response.data.success) {
        await db.collection("cases").doc(data.caseId).update({payment: {status: "in progress"}});
        onSuccess(response.data.clientSecret);
      } else {
        showToast(response.data.message, "error");
        onError();
      }
      dispatch(setIsCreatingPaymentIntent(false));
    }).catch((error)=>{
      onError();
      dispatch(setIsCreatingPaymentIntent(false));
      showToast(error.message, "error");
    })
  }
)

const updatePaymentStatus = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async (dispatch) => {
    await db.collection("cases").doc(data.caseId).update({
      payment: {
        transactionId: data.transactionId,
        transactionTimestamp: new Date(),
        status: "done"
      }
    });
  }
)

export {
  createPaymentIntent,
  updatePaymentStatus
};