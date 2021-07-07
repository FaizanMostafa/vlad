import firebase, {db, uploadMedia, deleteMedia} from "../../firebase";
import {showToast} from "../../utils";
import {
  SET_IS_UPDATING_PHONE_NO,
  SET_IS_UPDATING_PASSWORD,
  SET_IS_UPDATING_ADDRESS,
  SET_IS_UPDATING_IMAGE,
  SET_IS_UPDATING_EMAIL,
  UPDATE_USER_PHONE_NO,
  UPDATE_USER_ADDRESS,
  UPDATE_USER_IMAGE,
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

const setIsUpdatingAddress = (status) => {
  return {
    type: SET_IS_UPDATING_ADDRESS,
    payload: status
  };
}

const setIsUpdatingPhoneNo = (status) => {
  return {
    type: SET_IS_UPDATING_PHONE_NO,
    payload: status
  };
}

const setIsUpdatingImage = (status) => {
  return {
    type: SET_IS_UPDATING_IMAGE,
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
        const profilePicturePath = `profile_pictures/${user.uid}/${data["profilePicture"].name}`;
        const profilePictureURI = await uploadMedia(data["profilePicture"], `profile_pictures/${user.uid}/`);
        await db.collection("users").doc(user.uid).set({uid: user.uid, ...data, profilePictureURI, profilePicturePath});
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

const updateAddress = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsUpdatingAddress(true));
    db.collection("users").doc(data.uid)
      .update({address: data.address})
      .then(() => {
        dispatch({
          type: UPDATE_USER_ADDRESS,
          payload: {address: data.address}
        });
        showToast("Address updated successfully!", "success");
        dispatch(setIsUpdatingAddress(false));
        onSuccess();
      }).catch((error) => {
        showToast(error.message, "error");
        dispatch(setIsUpdatingAddress(false));
        onError();
      });
  }
)

const updatePhoneNumber = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsUpdatingPhoneNo(true));
    db.collection("users").doc(data.uid)
      .update({phoneNumber: data.phoneNumber})
      .then(() => {
        dispatch({
          type: UPDATE_USER_PHONE_NO,
          payload: {phoneNumber: data.phoneNumber}
        });
        showToast("Phone number updated successfully!", "success");
        dispatch(setIsUpdatingPhoneNo(false));
        onSuccess();
      }).catch((error) => {
        showToast(error.message, "error");
        dispatch(setIsUpdatingPhoneNo(false));
        onError();
      });
  }
)

const updateProfilePicture = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async (dispatch) => {
    dispatch(setIsUpdatingImage(true));
    await deleteMedia(data.oldProfilePicturePath);
    const profilePicturePath = `profile_pictures/${data.uid}/${data["profilePicture"].name}`;
    const profilePictureURI = await uploadMedia(data["profilePicture"], `profile_pictures/${data.uid}/`);
    db.collection("users").doc(data.uid)
      .update({profilePictureURI: profilePictureURI, profilePicturePath: profilePicturePath})
      .then(() => {
        dispatch({
          type: UPDATE_USER_IMAGE,
          payload: {
            profilePictureURI,
            profilePicturePath
          }
        });
        showToast("Profile picture updated successfully!", "success");
        dispatch(setIsUpdatingImage(false));
        onSuccess();
      }).catch((error) => {
        showToast(error.message, "error");
        dispatch(setIsUpdatingImage(false));
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
  updateAddress,
  updatePassword,
  updatePhoneNumber,
  updateProfilePicture
};