import firebase, {db} from "../../firebase";
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
      if(user) {
        var uid = user.uid;
        db.collection("users").doc(uid)
          .get().then((doc) => {
            var userData = doc.data();
            dispatch({
              type: FETCH_USER,
              payload: {uid, ...userData}
            });
          }).catch((error) => {
            console.log("Error getting user data:", error);
          });
      } else {
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
        showToast("User logged in successfully!", "success");
        dispatch(setIsSigningIn(false));
        onSuccess();
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
        var user = userCredential.user;
        delete data["password"];
        db.collection("users").doc(user.uid).set({uid: user.uid, ...data})
          .then(() => {
            showToast("User registered successfully!", "success");
            onSuccess();
            dispatch(setIsSigningUp(false));
          })
          .catch((error) => {
            console.error("Error saving user details: ", error);
          });
      })
      .catch((error) => {
        onError();
        showToast(error.message, "error");
        dispatch(setIsSigningUp(false));
      });
  }
)

const logout = () => (
  async (dispatch) => {
    await firebase.auth().signOut();
  }
)

export {
  login,
  logout,
  register,
  fetchUser,
};