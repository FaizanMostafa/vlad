import firebase, {db, uploadMedia} from "../../firebase";
import {showToast} from "../../utils";
import {
  SET_IS_UPDATING_PASSWORD,
  SET_IS_UPDATING_EMAIL,
  UPDATE_USER_EMAIL,
  SET_IS_SIGNING_IN,
  SET_IS_SIGNING_UP,
  FETCH_USER,
  LOGOUT
} from "../constants";

const setIsSigningIn = (status) => {
  return {
    type: SET_IS_SIGNING_IN,
    payload: status
  };
}

const setIsUpdatingEmail = (status) => {
  return {
    type: SET_IS_UPDATING_EMAIL,
    payload: status
  };
}

const setIsUpdatingPassword = (status) => {
  return {
    type: SET_IS_UPDATING_PASSWORD,
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
            console.log("\n User: ", {uid, ...userData}, "\n");
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
      .then(async(userCredential) => {
        var user = userCredential.user;
        delete data["password"];
        const profilePicture = await uploadMedia(data["profilePicture"], "profile_pictures/");
        await db.collection("users").doc(user.uid).set({uid: user.uid, ...data, profilePicture});
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

const updateEmail = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    const user = firebase.auth().currentUser;
    dispatch(setIsUpdatingEmail(true));
    user.updateEmail(data.email).then(() => {
      db.collection("users").doc(data.uid)
        .update({email: data.email})
        .then(() => {
          dispatch({
            type: UPDATE_USER_EMAIL,
            payload: {email: data.email}
          });
          showToast("Email updated successfully!", "success");
          dispatch(setIsUpdatingEmail(false));
          onSuccess();
        }).catch((error) => {
          showToast(error.message, "error");
          dispatch(setIsUpdatingEmail(false));
          onError();
        });
    }).catch((error) => {
      showToast(error.message, "error");
      dispatch(setIsUpdatingEmail(false));
      onError();
    });
  }
)

const updatePassword = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    const user = firebase.auth().currentUser;
    dispatch(setIsUpdatingPassword(true));
    user.updatePassword(data.password).then(() => {
      showToast("Password updated successfully!", "success");
      dispatch(setIsUpdatingPassword(false));
      onSuccess();
    }).catch((error) => {
      showToast(error.message, "error");
      dispatch(setIsUpdatingPassword(false));
      onError();
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
  updateEmail,
  updatePassword
};