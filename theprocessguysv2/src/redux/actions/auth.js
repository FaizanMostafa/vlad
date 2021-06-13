import firebase from "../../firebase";

const login = (data) => (
  (dispatch) => {
    
  }
)

const register = (data) => (
  (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  }
)

export {
  login,
  register
};