import firebase from 'firebase';
import firestore from 'firebase/firestore'



var config = {
    apiKey: "AIzaSyAt640O4dM6YerJUEuM8nSb5TKGGh_Rgcc",
    authDomain: "simple-chat-70f36.firebaseapp.com",
    databaseURL: "https://simple-chat-70f36-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "simple-chat-70f36",
    storageBucket: "simple-chat-70f36.appspot.com",
    messagingSenderId: "920694213131",
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots:true});

  export default firebaseApp.firestore()