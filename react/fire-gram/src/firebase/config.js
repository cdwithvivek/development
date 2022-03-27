import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAN-v44YlyfCrv-EvGy0zHaKe89fwc9oEc",
    authDomain: "firegram-ddf08.firebaseapp.com",
    projectId: "firegram-ddf08",
    storageBucket: "firegram-ddf08.appspot.com",
    messagingSenderId: "813319144474",
    appId: "1:813319144474:web:187d82b3f8058efc127da3"
};
// Initialize FireBase
firebase.initializeApp(firebaseConfig);
let projectStorage = firebase.storage();
let projectFirestore = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp
export  {projectStorage,projectFirestore, timestamp};