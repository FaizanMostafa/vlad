import { batch } from "react-redux";
import firebase, {db, uploadMedia, deleteMedia} from "../../firebase";
import {showToast} from "../../utils";
import {
  SET_IS_RESETTING_PASSWORD,
  SET_IS_UPDATING_PHONE_NO,
  SET_IS_UPDATING_PASSWORD,
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

const setIsSigningIn = (status) => {
  return {
    type: SET_IS_SIGNING_IN,
    payload: status
  };
}

const setIsFetchingUser = (status) => {
  return {
    type: SET_IS_FETCHING_USER,
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

const setIsResettingPassword = (status) => {
  return {
    type: SET_IS_RESETTING_PASSWORD,
    payload: status
  };
}

const fetchUser = () => (
  (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        const unsubscribeSetInterval = setInterval(() => {
          firebase.auth().currentUser.reload();
          const updatedUser = firebase.auth().currentUser;
          if(updatedUser.emailVerified) {
            clearInterval(unsubscribeSetInterval);
            const uid = user.uid;
            db.collection("users").doc(uid)
              .get().then((doc) => {
                const userData = doc.data();
                dispatch({
                  type: FETCH_USER,
                  payload: {uid, ...userData}
                });
              }).catch((error) => {
                console.log("Error getting user data:", error);
              });
          }
        }, 5000);
        if(user.emailVerified) {
          clearInterval(unsubscribeSetInterval);
          const uid = user.uid;
          db.collection("users").doc(uid)
            .get().then((doc) => {
              const userData = doc.data();
              dispatch({
                type: FETCH_USER,
                payload: {uid, ...userData}
              });
            }).catch((error) => {
              console.log("Error getting user data:", error);
            });
        } else {
          dispatch(setIsFetchingUser(false));
          showToast("Please verify your email!", "warning");
        }
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
        if(userCredential.user.emailVerified) {
          showToast("User logged in successfully!", "success");
          dispatch(setIsSigningIn(false));
          onSuccess();
        } else {
          dispatch(setIsSigningIn(false));
          showToast("Please verify your email first!", "warning");
        }
      })
      .catch((error) => {
        onError();
        showToast(error.message, "error");
        dispatch(setIsSigningIn(false));
      });
  }
)

const resetPassword = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsResettingPassword(true));
    firebase.auth().sendPasswordResetEmail(data.email)
      .then(() => {
        showToast("An mail with the password reset link has been sent to you email address!", "success");
        dispatch(setIsResettingPassword(false));
        onSuccess();
      })
      .catch((error) => {
        onError();
        showToast(error.message, "error");
        dispatch(setIsResettingPassword(false));
      });
  }
)

const register = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsSigningUp(true));
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        firebase.auth().currentUser.sendEmailVerification({url: "https://www.theprocessguys.com"})
          .then(async() => {
            const batch = db.batch();
            var user = userCredential.user;
            delete data["password"];
            const timestamp = new Date().toISOString();
            const profilePicturePath = `profile_pictures/${user.uid}/${timestamp}${data["profilePicture"].name}`;
            const profilePictureURI = await uploadMedia(data["profilePicture"], `profile_pictures/${user.uid}/`, timestamp);
            delete data["profilePicture"];
            batch.set(db.collection("users").doc(user.uid), {uid: user.uid, ...data, profilePictureURI, profilePicturePath, registeredAt: new Date()});
            batch.set(db.collection("Notifications").doc(), {category: "signup", addressed: false, read: false, content: {}, generatedAt: new Date()});
            await batch.commit();
            showToast("User registered successfully!", "success");
            onSuccess();
            dispatch(setIsSigningUp(false));
          });
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
        .then(async() => {
          dispatch({
            type: UPDATE_USER_EMAIL,
            payload: {email: data.email}
          });
          showToast("Email updated successfully!", "success");
          await firebase.auth().currentUser.sendEmailVerification();
          showToast("Please verify your email!", "warning");
          dispatch(setIsUpdatingEmail(false));
          onSuccess();
        }).catch((error) => {
          console.log("\nError: ", error);
          showToast(error.message, "error");
          dispatch(setIsUpdatingEmail(false));
          onError();
        });
    }).catch((error) => {
      console.log("\nError: ", error);
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
    try {
      dispatch(setIsUpdatingImage(true));
      await deleteMedia(data.oldProfilePicturePath);
      const timestamp = new Date().toISOString();
      const profilePicturePath = `profile_pictures/${data.uid}/${timestamp}${data["profilePicture"].name}`;
      const profilePictureURI = await uploadMedia(data["profilePicture"], `profile_pictures/${data.uid}/`, timestamp);
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
    } catch (error) {
      showToast(error.message, "error");
      dispatch(setIsUpdatingImage(false));
      onError();
    }
  }
)

const fetchTOSDocument = () => (
  async (dispatch) => {
    try {
      const tosDocSnapshot = await db.collection("TOSAgreements").orderBy("createdAt", "desc").limit(1).get();
      let tosDoc;
      tosDocSnapshot.forEach((doc)=>{
        tosDoc = doc.data();
      });
      dispatch({
        type: FETCH_TOS_DOC,
        payload: {tosDoc}
      });
    } catch (error) {
      showToast(error.message, "error");
      dispatch(setIsUpdatingImage(false));
    }
  }
)

const agreeToTOS = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async (dispatch) => {
    try {
      await db.collection("users").doc(data.uid).update({hasAgreedToTOS: true, tosAgreementTimestamp: new Date()});
      dispatch({type: AGREE_TO_TOS});
      onSuccess();
    } catch (error) {
      showToast(error.message, "error");
      dispatch(setIsUpdatingImage(false));
      onError();
    }
  }
)

const logout = (onSuccess=()=>{}) => (
  async (dispatch) => {
    await firebase.auth().signOut();
    onSuccess();
  }
)

export {
  login,
  logout,
  register,
  fetchUser,
  agreeToTOS,
  updateEmail,
  resetPassword,
  updateAddress,
  updatePassword,
  fetchTOSDocument,
  updatePhoneNumber,
  updateProfilePicture
};