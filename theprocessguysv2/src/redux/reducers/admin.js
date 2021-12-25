import {
  SET_IS_UPDATING_USER,
  SET_IS_CREATING_CASE,
  SET_IS_UPDATING_CASE,
  SET_IS_FETCHING_METADATA,
  SET_IS_ADDING_TOS_DOC,
  SET_IS_FETCHING_USERS,
  SET_IS_FETCHING_CASES,
  SET_IS_CREATING_USER,
  SET_IS_DELETING_USER,
  SET_IS_DELETING_CASE,
  SET_IS_DELETING_TOS_DOC,
  SET_IS_FETCHING_TOS_DOCS,
  ADD_TOS_DOC,
  DELETE_TOS_DOC,
  FETCH_TOS_DOCS,
  FETCH_CASE_DETAILS,
  FETCH_METADATA,
  DELETE_USER,
  FETCH_USERS,
  FETCH_CASES,
  DELETE_CASE,
  UPDATE_USER,
  LOGOUT,
  SET_IS_FETCHING_CASE_DETAILS
} from "../constants";

const initState = {
  users: [],
  cases: [],
  tosDocs: [],
  caseDetails: null,
  metadata: null,
  isFetchingCaseDetails: true,
  lastUserVisible: null,
  lastCaseVisible: null,
  isCreatingUser: false,
  isFetchingTOSDocs: false,
  isDeletingTOSDoc: false,
  isAddingTOSDoc: false,
  isUpdatingUser: false,
  isDeletingUser: false,
  isCreatingCase: false,
  isUpdatingCase: false,
  isDeletingCase: false,
  isFetchingMetadata: false,
  isFetchingUsers: true,
  isFetchingCases: true,
};

const adminReducer = (state=initState, {type, payload}) => {
  switch (type) {
    case SET_IS_FETCHING_USERS: {
      return {
        ...state,
        isFetchingUsers: payload
      };
    }

    case SET_IS_FETCHING_CASES: {
      return {
        ...state,
        isFetchingCases: payload
      };
    }

    case SET_IS_UPDATING_USER: {
      return {
        ...state,
        isUpdatingUser: payload
      };
    }

    case SET_IS_CREATING_USER: {
      return {
        ...state,
        isCreatingUser: payload
      };
    }

    case SET_IS_DELETING_USER: {
      return {
        ...state,
        isDeletingUser: payload
      };
    }

    case SET_IS_CREATING_CASE: {
      return {
        ...state,
        isCreatingCase: payload
      };
    }

    case SET_IS_UPDATING_CASE: {
      return {
        ...state,
        isUpdatingCase: payload
      };
    }

    case SET_IS_FETCHING_CASE_DETAILS: {
      return {
        ...state,
        isFetchingCaseDetails: payload
      };
    }

    case SET_IS_FETCHING_TOS_DOCS: {
      return {
        ...state,
        isFetchingTOSDocs: payload
      };
    }

    case SET_IS_ADDING_TOS_DOC: {
      return {
        ...state,
        isAddingTOSDoc: payload
      };
    }

    case SET_IS_DELETING_TOS_DOC: {
      return {
        ...state,
        isDeletingTOSDoc: payload
      };
    }

    case FETCH_USERS: {
      return {
        ...state,
        isFetchingUsers: false,
        users: [...state.users, ...payload.users],
        lastUserVisible: payload.lastVisible
      };
    }

    case UPDATE_USER: {
      const updatedUsers = [];
      for(const user of state.users) {
        if(user.uid!==payload.user.uid) {
          updatedUsers.push(user);
        } else {
          updatedUsers.push({...user, ...payload.user});
        }
      }
      return {
        ...state,
        users: updatedUsers,
        isUpdatingUser: false
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user)=>user.uid!==payload.uid),
        isDeletingUser: false
      };
    }

    case FETCH_CASES: {
      return {
        ...state,
        isFetchingCases: false,
        cases: [...state.cases, ...payload.cases],
        lastCaseVisible: payload.lastVisible
      };
    }

    case FETCH_CASE_DETAILS: {
      return {
        ...state,
        isFetchingCaseDetails: false,
        caseDetails: payload
      };
    }

    case SET_IS_DELETING_CASE: {
      return {
        ...state,
        isDeletingCase: payload
      };
    }

    case DELETE_CASE: {
      return {
        ...state,
        cases: state.cases.filter((userCase)=>userCase.docId!==payload.docId),
        isDeletingCase: false
      };
    }

    case SET_IS_FETCHING_METADATA: {
      return {
        ...state,
        isFetchingMetadata: payload
      }
    }

    case FETCH_TOS_DOCS: {
      return {
        ...state,
        isFetchingTOSDocs: false,
        tosDocs: [...state.tosDocs, ...payload.tosDocs],
        lastCaseVisible: payload.lastVisible
      };
    }

    case ADD_TOS_DOC: {
      const updatedTosDocs = [payload, {...state.tosDocs[0], status: "inactive"}, ...state.tosDocs.slice(1, state.tosDocs.length)];
      return {
        ...state,
        isAddingTOSDoc: false,
        tosDocs: updatedTosDocs
      };
    }

    case DELETE_TOS_DOC: {
      const updatedTosDocs = state.tosDocs.filter((doc)=>doc.docId!==payload.docId);
      return {
        ...state,
        tosDocs: [{...updatedTosDocs[0], status: "active"}, ...updatedTosDocs.slice(1, updatedTosDocs.length)],
        isDeletingTOSDoc: false
      };
    }

    case FETCH_METADATA: {
      return {
        ...state,
        isFetchingMetadata: false,
        metadata: payload.metadata
      }
    }

    case LOGOUT: {
      return initState;
    }
  
    default: {
      return state;
    }
  }
}


export default adminReducer;