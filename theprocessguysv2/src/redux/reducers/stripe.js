import {
  SET_IS_CREATING_PAYMENT_INTENT,
  LOGOUT
} from "../constants";

const initState = {
  isCreatingPaymentIntent: false
};

export default (state=initState, {type, payload}) => {
  switch (type) {
    case SET_IS_CREATING_PAYMENT_INTENT: {
      return {
        ...state,
        isCreatingPaymentIntent: payload
      };
    }

    case LOGOUT: {
      return initState;
    }
  
    default: {
      return state;
    }
  }
}