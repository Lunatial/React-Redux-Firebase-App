import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyB3xqHPWiZfb8fLh7aHO3hU7ib2-5fzLG8",
    authDomain: "react-redux-firebase-app-d50b0.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-app-d50b0.firebaseio.com",
    projectId: "react-redux-firebase-app-d50b0",
    storageBucket: "react-redux-firebase-app-d50b0.appspot.com",
    messagingSenderId: "417918456320"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase