import {
    SET_IS_SIGNING_IN,
    SET_IS_SIGNING_UP,
    FETCH_USER,
    LOGOUT
} from "../constants";

const initState = {
    user: null,
    isAuthenticated: false,
    isPosting: false,
    isFetching: false,
    isFetchingUser: true
};

const authReducer = (state=initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case FETCH_USER: {
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                isFetchingUser: false
            };
        }

        case SET_IS_SIGNING_IN: {
            return {
                ...state,
                isPosting: payload
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