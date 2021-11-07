import firebase from 'firebase';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDNtQbleH1OGCAlmCfnJl0pr7ynrH_E9Hg",
  authDomain: "the-process-guys.firebaseapp.com",
  projectId: "the-process-guys",
  storageBucket: "the-process-guys.appspot.com",
  messagingSenderId: "712381401409",
  appId: "1:712381401409:web:ee0d4ae7642785470639c0",
  measurementId: "G-TYPTXTCZGS"
});

const uploadMedia = async(file, baseFolder, timestamp=new Date().toISOString()) => {
  var storageRef = firebase.storage().ref();
  var fileRef = storageRef.child(`${baseFolder}${timestamp}${file.name}`);
  const snapshot = await fileRef.put(file);
  return snapshot.ref.getDownloadURL();
}

const uploadBase64Media = async(file, baseFolder, timestamp=new Date().toISOString()) => {
  var storageRef = firebase.storage().ref();
  var fileRef = storageRef.child(`${baseFolder}${timestamp}${file.name}`);
  await fileRef.putString(file.base64, 'data_url');
  return fileRef.getDownloadURL();
}

const deleteMedia = async(filePath) => {
  var storageRef = firebase.storage().ref();
  return storageRef.child(filePath).delete();
}

const db = firebase.firestore();

firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    // return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });

export {
  db,
  deleteMedia,
  uploadMedia,
  uploadBase64Media
};
export default firebase;