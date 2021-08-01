import {
  SET_IS_FORM_POSTING,
  LOGOUT
} from "../constants";

const initState = {
  isPosting: false,
};

const formReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_FORM_POSTING: {
      return {
        ...state,
        isPosting: payload
      }
    }

    case LOGOUT: {
      return {
        ...initState
      };
    }

    default: {
      return state;
    }
  }
}

export default formReducer;