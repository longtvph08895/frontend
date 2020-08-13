import firebase from 'firebase'
// import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyBkU8p9awUjOU46AZl2ix8TFJKjqoQ3t1U",
    authDomain: "reactjs-2a387.firebaseapp.com",
    databaseURL: "https://reactjs-2a387.firebaseio.com",
    projectId: "reactjs-2a387",
    storageBucket: "reactjs-2a387.appspot.com",
    messagingSenderId: "459358174780",
    appId: "1:459358174780:web:e863df5e0fcd05e2d4cd39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;