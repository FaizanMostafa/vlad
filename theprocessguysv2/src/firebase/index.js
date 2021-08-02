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

const uploadMedia = async(file, baseFolder) => {
  var storageRef = firebase.storage().ref();
  var fileRef = storageRef.child(`${baseFolder}${new Date().toISOString()}${file.name}`);
  const snapshot = await fileRef.put(file);
  return snapshot.ref.getDownloadURL();
}

const deleteMedia = async(filePath) => {
  var storageRef = firebase.storage().ref();
  return storageRef.child(filePath).delete();
}

const db = firebase.firestore();

export {
  db,
  deleteMedia,
  uploadMedia,
};
export default firebase;