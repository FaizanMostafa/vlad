import {
  SET_IS_FETCHING_METADATA,
  SET_IS_FETCHING_USERS,
  SET_IS_CREATING_USER,
  SET_IS_DELETING_USER,
  FETCH_METADATA,
  FETCH_USERS,
  LOGOUT
} from "../constants";

const initState = {
  users: [],
  metadata: null,
  lastVisible: null,
  isCreatingUser: false,
  isDeletingUser: false,
  isFetchingMetadata: false,
  isFetchingUsers: true,
};

export default (state=initState, {type, payload}) => {
  switch (type) {
    case SET_IS_FETCHING_USERS: {
      return {
        ...state,
        isFetchingUsers: payload
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
        lastVisible: payload.lastVisible
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