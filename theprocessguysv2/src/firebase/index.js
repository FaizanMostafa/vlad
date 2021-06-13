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

const db = firebase.firestore();

export default db;