import {
  SET_IS_FETCHING_CASE_DETAILS,
  SET_USER_CASE_DETAILS,
  SET_IS_FETCHING_CASES,
  SET_IS_FORM_POSTING,
  SET_USER_CASES,
  LOGOUT
} from "../constants";

const initState = {
  cases: [],
  isPosting: false,
  isFetchingCaseDetails: true,
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

    case SET_IS_FETCHING_CASE_DETAILS: {
      return {
        ...state,
        isFetchingCaseDetails: payload
      }
    }

    case SET_IS_FORM_POSTING: {
      return {
        ...state,
        isPosting: payload
      }
    }

    case SET_USER_CASE_DETAILS: {
      let updatedCases = [];
      state.cases.forEach(caseData => {
        if(caseData.id===payload.id) {
          updatedCases.push({
            ...caseData,
            details: payload.caseDetails
          });
        } else {
          updatedCases.push(caseData);
        }
      });
      console.log({updatedCases});
      return {
        ...state,
        cases: updatedCases,
        isFetchingCaseDetails: false
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