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
    try {
      await db.collection("cases").doc(data.caseId).update({
        payment: {
          transactionId: data.transactionId,
          transactionTimestamp: new Date(),
          status: "done"
        }
      });
      await generatePaymentNotification("success", data);
      onSuccess();
    } catch (error) {
      onError();
      showToast(error.message, "error");
    }
  }
)

const generatePaymentNotification = (type, data) => {
  if(type.toLowerCase()==="success") {
    return db.collection("Notifications").add({category: "payment_success", addressed: false, read: false, title: `${data.userName} has successfully completed payment of ${data.amount}$ for case ${data.caseId}`, content: {caseId: data.caseId, caseTitle: data.caseTitle, uid: data.uid, userName: data.userName, amount: data.amount, transactionId: data.transactionId}, generatedAt: new Date()});
  } else {
    return db.collection("Notifications").add({category: "payment_failure", addressed: false, read: false, title: `${data.userName} payment of ${data.amount}$ for case ${data.caseId} was unsuccessful, please review it!`, content: {caseId: data.caseId, caseTitle: data.caseTitle, uid: data.uid, userName: data.userName, amount: data.amount, transactionId: data.transactionId}, generatedAt: new Date()});
  }
}

export {
  generatePaymentNotification,
  createPaymentIntent,
  updatePaymentStatus
};