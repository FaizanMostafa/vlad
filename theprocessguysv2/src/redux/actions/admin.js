import {db} from "../../firebase";
import {showToast} from "../../utils";
import {
  FETCH_USERS,
  FETCH_METADATA,
  SET_IS_FETCHING_USERS,
  SET_IS_FETCHING_METADATA
} from "../constants";

const setIsFetchingUsers = (status) => {
  return {
    type: SET_IS_FETCHING_USERS,
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
      setIsFetchingMetadata(true);
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
      setIsFetchingMetadata(false);
      showToast(error.message, "error");
    }
  }
)

const fetchUsers = () => (
  (dispatch) => {
    try {
      setIsFetchingUsers(true);
      db.collection("users")
        .where("role", "!=", "superadmin")
        .onSnapshot((querySnapshot) => {
          let users = [];
          for(const doc of querySnapshot.docs) {
            users.push(doc.data());
          }
          console.log({users})
          dispatch({
            type: FETCH_USERS,
            payload: {users}
          });
        });
    } catch (error) {
      setIsFetchingUsers(false);
      showToast(error.message, "error");
    }
  }
)

export {
  fetchUsers,
  getMetadataInfo
};