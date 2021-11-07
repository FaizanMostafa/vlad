import {
  SET_IS_UPDATING_USER,
  SET_IS_FETCHING_METADATA,
  SET_IS_FETCHING_USERS,
  SET_IS_FETCHING_CASES,
  SET_IS_CREATING_USER,
  SET_IS_DELETING_USER,
  SET_IS_DELETING_CASE,
  FETCH_METADATA,
  DELETE_USER,
  FETCH_USERS,
  FETCH_CASES,
  DELETE_CASE,
  UPDATE_USER,
  LOGOUT
} from "../constants";

const initState = {
  users: [],
  cases: [],
  metadata: null,
  lastUserVisible: null,
  lastCaseVisible: null,
  isCreatingUser: false,
  isUpdatingUser: false,
  isDeletingUser: false,
  isDeletingCase: false,
  isFetchingMetadata: false,
  isFetchingUsers: true,
  isFetchingCases: true,
};

export default (state=initState, {type, payload}) => {
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