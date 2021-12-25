import {
  SET_IS_RESETTING_PASSWORD,
  SET_IS_UPDATING_PASSWORD,
  SET_IS_UPDATING_PHONE_NO,
  SET_IS_UPDATING_ADDRESS,
  SET_IS_UPDATING_IMAGE,
  SET_IS_UPDATING_EMAIL,
  SET_IS_FETCHING_USER,
  UPDATE_USER_PHONE_NO,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_IMAGE,
  UPDATE_USER_EMAIL,
  SET_IS_SIGNING_IN,
  SET_IS_SIGNING_UP,
  FETCH_TOS_DOC,
  AGREE_TO_TOS,
  FETCH_USER,
  LOGOUT
} from "../constants";

const initState = {
  user: null,
  tosDoc: null,
  isAuthenticated: false,
  isPosting: false,
  isFetching: false,
  isFetchingTOSDoc: true,
  isResetting: false,
  isFetchingUser: true,
  isUpdatingEmail: false,
  isUpdatingPhoneNo: false,
  isUpdatingImage: false,
  isUpdatingAddress: false,
  isUpdatingPassword: false
};

const authReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER: {
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        isFetchingUser: false
      };
    }

    case SET_IS_FETCHING_USER: {
      return {
        ...state,
        isFetchingUser: payload
      };
    }

    case SET_IS_SIGNING_IN: {
      return {
        ...state,
        isPosting: payload
      }
    }

    case SET_IS_UPDATING_EMAIL: {
      return {
        ...state,
        isUpdatingEmail: payload
      }
    }

    case SET_IS_UPDATING_PASSWORD: {
      return {
        ...state,
        isUpdatingPassword: payload
      }
    }

    case SET_IS_RESETTING_PASSWORD: {
      return {
        ...state,
        isResetting: payload
      }
    }

    case SET_IS_UPDATING_ADDRESS: {
      return {
        ...state,
        isUpdatingAddress: payload
      }
    }

    case SET_IS_UPDATING_PHONE_NO: {
      return {
        ...state,
        isUpdatingPhoneNo: payload
      }
    }

    case SET_IS_UPDATING_IMAGE: {
      return {
        ...state,
        isUpdatingImage: payload
      }
    }

    case UPDATE_USER_EMAIL: {
      return {
        ...state,
        user: { ...state.user, email: payload.email }
      }
    }

    case UPDATE_USER_ADDRESS: {
      return {
        ...state,
        user: { ...state.user, address: payload.address }
      }
    }

    case UPDATE_USER_PHONE_NO: {
      return {
        ...state,
        user: { ...state.user, phoneNumber: payload.phoneNumber }
      }
    }

    case UPDATE_USER_IMAGE: {
      return {
        ...state,
        user: { ...state.user, ...payload }
      }
    }

    case FETCH_TOS_DOC: {
      return {
        ...state,
        isFetchingTOSDoc: false,
        tosDoc: payload.tosDoc
      }
    }

    case AGREE_TO_TOS: {
      return {
        ...state,
        user: {...state.user, hasAgreedToTOS: true}
      }
    }

    case SET_IS_SIGNING_UP: {
      return {
        ...state,
        isPosting: payload
      }
    }

    case LOGOUT: {
      return {
        ...initState,
        isFetchingUser: false
      };
    }

    default: {
      return state;
    }
  }
}

export default authReducer;