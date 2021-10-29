import firebase, {db, uploadMedia, deleteMedia} from "../../firebase";
import {showToast} from "../../utils";
import {
  FETCH_USERS,
  UPDATE_USER,
  FETCH_METADATA,
  SET_IS_UPDATING_USER,
  SET_IS_DELETING_USER,
  SET_IS_CREATING_USER,
  SET_IS_FETCHING_USERS,
  SET_IS_FETCHING_METADATA
} from "../constants";

const setIsUpdatingUser = (status) => {
  return {
    type: SET_IS_UPDATING_USER,
    payload: status
  };
}

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

const fetchUsers = (data) => (
  (dispatch) => {
    try {
      dispatch(setIsFetchingUsers(true));
      db.collection("users")
        .where("role", "!=", "superadmin")
        .orderBy("role")
        .orderBy("registeredAt", "desc")
        .startAfter(data.lastVisible)
        .limit(data.limit).get()
        .then((querySnapshot) => {
          let users = [];
          let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
          for(const doc of querySnapshot.docs) {
            users.push({docId: doc.id, ...doc.data()});
          }
          dispatch({
            type: FETCH_USERS,
            payload: {users, lastVisible}
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

const updateUser = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async(dispatch) => {
    try {
      dispatch(setIsUpdatingUser(true));
      if(data.user.profilePicture) {
        await deleteMedia(data.user.profilePicturePath);
        const timestamp = new Date().toISOString();
        data.user["profilePicturePath"] = `profile_pictures/${data.uid}/${timestamp}${data.user["profilePicture"].name}`;
        data.user["profilePictureURI"] = await uploadMedia(data.user["profilePicture"], `profile_pictures/${data.uid}/`, timestamp);
        delete data.user["profilePicture"];
      }
      db.collection("users")
        .doc(data.docId)
        .update({...data.user}).then(() => {
          onSuccess();
          dispatch({
            type: UPDATE_USER,
            payload: {user: {uid: data.uid, ...data.user}}
          });
          showToast("User has been updated in the system successfully!", "success");
        });
    } catch (error) {
      onError();
      dispatch(setIsUpdatingUser(false));
      showToast(error.message, "error");
    }
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
  updateUser,
  createUser,
  deleteUser,
  fetchUsers,
  getMetadataInfo
};