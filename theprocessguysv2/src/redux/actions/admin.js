import {db} from "../../firebase";
import {showToast} from "../../utils";
import {
  FETCH_USERS,
  SET_IS_FETCHING_USERS,
} from "../constants";

const setIsFetchingUsers = (status) => {
  return {
    type: SET_IS_FETCHING_USERS,
    payload: status
  };
}

const fetchUsers = (data, onSuccess=()=>{}, onError=()=>{}) => (
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
  fetchUsers
};