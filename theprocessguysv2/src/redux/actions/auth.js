import firebase from "../../firebase";
import {showToast} from "../../utils";
import {
  FETCH_USER,
  SET_IS_SIGNING_IN,
  SET_IS_SIGNING_UP,
  LOGOUT
} from "../constants";

const setIsSigningIn = (status) => {
  return {
    type: SET_IS_SIGNING_IN,
    payload: status
  };
}

const setIsSigningUp = (status) => {
  return {
    type: SET_IS_SIGNING_UP,
    payload: status
  };
}

const fetchUser = () => (
  (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log({user});
        dispatch({
          type: FETCH_USER,
          payload: user
        });
      } else {
        // User is signed out
        // ...
        dispatch({
          type: LOGOUT
        });
      }
    });
  }
)

const login = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsSigningIn(true));
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        showToast("User logged in successfully!", "success");
        onSuccess();
        dispatch(setIsSigningIn(false));
      })
      .catch((error) => {
        onError();
        showToast(error.message, "error");
        dispatch(setIsSigningIn(false));
      });
  }
)

const register = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsSigningUp(true));
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        showToast("User registered successfully!", "success");
        onSuccess();
        dispatch(setIsSigningUp(false));
      })
      .catch((error) => {
        onError();
        showToast(error.message, "error");
        dispatch(setIsSigningUp(false));
      });
  }
)

export {
  login,
  register,
  fetchUser,
};