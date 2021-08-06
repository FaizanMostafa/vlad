import {
  SET_IS_FETCHING_CASES,
  SET_IS_FORM_POSTING,
  SET_USER_CASES,
  LOGOUT
} from "../constants";

const initState = {
  cases: [],
  isPosting: false,
  isFetching: true,
};

const caseReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_IS_FETCHING_CASES: {
      return {
        ...state,
        isFetching: payload
      }
    }

    case SET_IS_FORM_POSTING: {
      return {
        ...state,
        isPosting: payload
      }
    }

    case SET_USER_CASES: {
      return {
        ...state,
        cases: payload,
        isFetching: false
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

export default caseReducer;