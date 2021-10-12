import {
  FETCH_USERS,
  LOGOUT
} from "../constants";

const initState = {
  users: [],
  isFetchingUsers: true,
};

export default (state=initState, {type, payload}) => {
  switch (type) {
    case FETCH_USERS: {
      return {
        ...state,
        isFetchingUsers: false,
        users: [...state.users, ...payload.users]
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