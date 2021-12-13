const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyAx7EOQ38jlkg2857SoYtOkcvLqzYNdpH4",
    authDomain: "nodefirebase-4a307.firebaseapp.com",
    projectId: "nodefirebase-4a307",
    storageBucket: "nodefirebase-4a307.appspot.com",
    messagingSenderId: "877038119775",
    appId: "1:877038119775:web:f3f06abb5357898acd64ea",
    measurementId: "G-9VTRC2MF9N"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Contact = db.collection("Contacts");
module.exports = Contact;

