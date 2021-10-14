import {
  SET_IS_FETCHING_METADATA,
  SET_IS_FETCHING_USERS,
  FETCH_METADATA,
  FETCH_USERS,
  LOGOUT
} from "../constants";

const initState = {
  users: [],
  metadata: null,
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

    case FETCH_USERS: {
      return {
        ...state,
        isFetchingUsers: false,
        users: [...state.users, ...payload.users]
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