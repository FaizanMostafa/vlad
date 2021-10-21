import firebase, {db, uploadMedia, deleteMedia} from "../../firebase";
import {showToast} from "../../utils";
import {
  FETCH_USERS,
  FETCH_METADATA,
  SET_IS_DELETING_USER,
  SET_IS_CREATING_USER,
  SET_IS_FETCHING_USERS,
  SET_IS_FETCHING_METADATA,
} from "../constants";

const setIsFetchingUsers = (status) => {
  return {
    type: SET_IS_FETCHING_USERS,
    payload: status
  };
}

const setIsDeletingUser = (status) => {
  return {
    type: SET_IS_DELETING_USER,
    payload: status
  };
}

const setIsCreatingUser = (status) => {
  return {
    type: SET_IS_CREATING_USER,
    payload: status
  };
}

const setIsFetchingMetadata = (status) => {
  return {
    type: SET_IS_FETCHING_METADATA,
    payload: status
  };
}

const getMetadataInfo = () => (
  (dispatch) => {
    try {
      dispatch(setIsFetchingMetadata(true));
      db.collection("metadatas")
        .onSnapshot((querySnapshot) => {
          const metadata = {};
          querySnapshot.forEach((doc) => {
            metadata[doc.id] = doc.data().count;
          });
          dispatch({
            type: FETCH_METADATA,
            payload: {metadata}
          });
        });
    } catch (error) {
      dispatch(setIsFetchingMetadata(false));
      showToast(error.message, "error");
    }
  }
)

const fetchUsers = () => (
  (dispatch) => {
    try {
      dispatch(setIsFetchingUsers(true));
      db.collection("users")
        .where("role", "!=", "superadmin")
        .onSnapshot((querySnapshot) => {
          let users = [];
          for(const doc of querySnapshot.docs) {
            users.push({docId: doc.id, ...doc.data()});
          }
          console.log({users})
          dispatch({
            type: FETCH_USERS,
            payload: {users}
          });
        });
    } catch (error) {
      dispatch(setIsFetchingUsers(false));
      showToast(error.message, "error");
    }
  }
)


const createUser = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsCreatingUser(true));
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        firebase.auth().currentUser.sendEmailVerification()
          .then(async() => {
            var user = userCredential.user;
            delete data["password"];
            const timestamp = new Date().toISOString();
            const profilePicturePath = `profile_pictures/${user.uid}/${timestamp}${data["profilePicture"].name}`;
            const profilePictureURI = await uploadMedia(data["profilePicture"], `profile_pictures/${user.uid}/`, timestamp);
            delete data["profilePicture"];
            await db.collection("users").doc(user.uid).set({uid: user.uid, ...data, profilePictureURI, profilePicturePath, registeredAt: new Date()});
            showToast("User created successfully!", "success");
            onSuccess();
            dispatch(setIsCreatingUser(false));
          });
      })
      .catch((error) => {
        onError();
        showToast(error.message, "error");
        dispatch(setIsCreatingUser(false));
      });
  }
)

const deleteUser = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    try {
      dispatch(setIsDeletingUser(true));
      db.collection("users")
        .doc(data.docId)
        .delete().then(() => {
          onSuccess();
          dispatch(setIsDeletingUser(false));
          showToast("User has been deleted from the system successfully!", "success");
        });
    } catch (error) {
      onError();
      dispatch(setIsDeletingUser(false));
      showToast(error.message, "error");
    }
  }
)

export {
  createUser,
  deleteUser,
  fetchUsers,
  getMetadataInfo
};